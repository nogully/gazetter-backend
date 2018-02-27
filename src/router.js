var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/gettweets', controller.getTweets);


module.exports = router;
