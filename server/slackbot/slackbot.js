// Import express and request modules
var express = require('express');
var axios = require('axios');
var slackControllers = require('./slackControllers');

// Instantiates Express and assigns our app variable to it
var router = express.Router();

router.post('/vote', slackControllers.vote);
router.get('/oauth', slackControllers.oauth);
// Route the endpoint that our slash command will point to and send back a simple response to indicate that ngrok is working
router.post('/command', slackControllers.command);

module.exports = router;
