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

module.exports.landingPage = (event, context, callback) => {
  let dynamicHtml = '<p>Hey Unknown!</p>';
  // check for GET params and use if available
  if (event.queryStringParameters && event.queryStringParameters.name) {
    dynamicHtml = `<p>Hey ${event.queryStringParameters.name}!</p>`;
  }

  const html = `
    <html>
      <body>
        <h1>Landing Page</h1>
        ${dynamicHtml}
      </body>
    </html>`;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  // callback is sending HTML back
  callback(null, response);
};
