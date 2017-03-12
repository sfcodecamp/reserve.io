'use strict';
var axios = require('axios');

module.exports.opentable = (event, context, callback) => {

  let city = (event.queryStringParameters && event.queryStringParameters.city) ?
    event.queryStringParameters.city : 'San Francisco';

  const publicAPI = `http://opentable.herokuapp.com/api/restaurants?city=${city}`;

  const getAvailabilityByLoc = () => {

    axios.get(`${publicAPI}`).then(result => {
      var response = {
        statusCode: 200,
        body: JSON.stringify({
          message: result.data
        })
      };
      callback(null, response);
    }).catch(error => {
      var response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'There was a problem retrieving the results...'
        })
      };
      callback(null, response);
    });
  }

  getAvailabilityByLoc();

};

module.exports.info = (event, context, callback) => {

  let id = (event.queryStringParameters && event.queryStringParameters.id) ? event.queryStringParameters.id : null;
  let size = (event.queryStringParameters && event.queryStringParameters.size) ? event.queryStringParameters.size : '2';
  let start_time = (event.queryStringParameters && event.queryStringParameters.time) ? event.queryStringParameters.time : '2017-03-29T18%3A00';

  var response = {};

  if (id) {
    const url = `https://platform.otqa.com/availability/${id}?start_date_time=${start_time}&party_size=${size}&forward_minutes=120&backward_minutes=30`;
    axios.get(url, {
      method: 'get',
      headers: {'Authorization': 'Bearer 27037c67-f394-4cfd-ab51-069ac71132fb'},
    }).then(result => {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          message: result.data
        })
      };
      callback(null, response);
    }).catch(error => {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          error: 'There was a problem retrieving the results from OpenTable...'
        })
      };
      callback(null, response);
    });
  } else {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        error: `No ID was provided...`
      })
    };
    callback(null, response);
  }

};
