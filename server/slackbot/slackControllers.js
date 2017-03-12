var axios = require('axios');
require('dotenv').config();

// Store our app's ID and Secret. These we got from Step 1. 
var clientId = process.env.CLIENT_ID;
var clientSecret = process.env.CLIENT_SECRET;

var controllers = {
	voteCount: {
		yes: 0,
		no: 0
	},
	getListings: function() {
		// Get data from Open Table
		const city = 'San%20Francisco'
		const url = `https://hu1b1nudk7.execute-api.us-east-1.amazonaws.com/dev/opentable?city=${city}`;
		let listings = axios.get(url)
			.then(function(response) {			
				let listings = response.data.message.restaurants;
				return listings;
			})
		return listings;
	},
	vote: function(req, res) {
		var payload = JSON.parse(req.body.payload);
		// search payload for vote count (value is yes)
		// update voteCount
		let answer = payload.actions[0].value === 'yes';
		answer ? controllers.voteCount.yes++ : controllers.voteCount.no++;
		console.log(controllers.voteCount)
		let data = {
	    "text": answer ? "Great, I'll count you in." : "Bummer. Really wish you could be there.",
	    "attachments": [
	        {
	          "title": "Roy's - San Francisco",
	          "text": "575 Mission St, San Francisco",
	          "fallback": "", // send url as a back up text
	        },
	        {
	        	"title": answer ? "Get ready to party!" : "In case you change your mind",
	        	"text": "March 29th at 7pm"
	        }
	    ]
		}
		res.json(data)
	},
	oauth: function(req, res) {
		// When a user authorizes an router, a code query parameter is passed on the oAuth endpoint. If that code is not there, we respond with an error message
	  
	  if (!req.query.code) {
      res.status(500);
      res.send({"Error": "Looks like we're not getting code."});
      console.log("Looks like we're not getting code.");
	  } else {
      // We'll do a GET call to Slack's `oauth.access` endpoint, passing our router's client ID, client secret, and the code we just got as query parameters.
      axios({
        url: 'https://slack.com/api/oauth.access', //URL to hit
        qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret}, //Query string data
        method: 'GET', //Specify the method
      }, function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            res.json(body);
        }
      })
	  }
	},
	command: function(req, res) {
		// console.log(req.body)
		controllers.getListings()
			.then(function(results) {
		  	return results;
			})
			.then(function(listings) {
				// console.log(listings)
				// populate data object with info from listings
				
			  let data = {
				  response_type: 'in_channel', // public to the channel
				  "text": "Pick a restaurant for Sean's birthday celebration!",
			    "attachments": [
			      {
			        "title": "Roy's - San Francisco",
			        "fields": [
			            {
			              "title": "Price",
			              "value": "$$$",
			              "short": true
			            },
			            {
			              "title": "Seafood",
			              "value": "SOMA",
			        			"short": true
			            }
			        ],
			        "image_url": "https://resizer.otstatic.com/v1/fDzI465IL8%2B687zSupRS4Q/23701423.jpg"
			      },
			      {
			        "title": "Description",
			        "text": "Blending classic techniques with adventurous Pacific Rim flavors, culinary pioneer Roy Yamaguchi created an entirely new approach to fine dining. The first Roy's opened in Honolulu in 1988 and we've spread our warm hospitality and passion for innovative and creative cuisine around the world ever since."
			      },
			      {
			        "fallback": "Celebrate with us!",
			        "title": "Celebrate with us!",
			        "text": "March 29th at 7pm",
			        "callback_id": "dinner_for_sean",
			        "color": "#3AA3E3",
			        "attachment_type": "default",
			        "actions": [
			          {
			              "name": "yes",
			              "text": "Hell yes!",
			              "type": "button",
			              "value": "yes"
			          },
			          {
			              "name": "no",
			              "text": "Nah",
			              "type": "button",
			              "value": "no"
			          }
			        ]
			      }
			    ]
				};
				res.json(data);
			})
	}
} 

module.exports = controllers;