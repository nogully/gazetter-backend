var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/gettweets', controller.getTweets);

router.post('/user', controller.userLogin);


module.exports = router;
