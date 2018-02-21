var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/gettweets', controller.getTweets);
// router.post('/filterTweets/:filter', controller.filterTweets)

module.exports = router;
