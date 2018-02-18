var express = require('express');
var router = express.Router();
var controller = require('./controller');

// router.get('/places', controller.getPlaces);
router.post('/whytho/:keys', controller.whyTho);
router.get('/gettweets', controller.getTweets);

module.exports = router;
