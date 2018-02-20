const request = require('request')
const Twitter = require('twitter')
require('locus')
const consumer_key = require('./consumerKey.js');
const consumer_secret = require('./consumerSecret.js');
const access_token_key = require('./accessTokenKey.js');
const access_token_secret = require('./accessTokenSecret.js');
// const API_KEY = // API KEY GOES HERE
// const BASE_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=${API_KEY}`

function getPlaces(req, res, next) {
  request(BASE_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
}

function getTweets(request, resp, next){
  console.log('getTweets run')
  var client = new Twitter({ consumer_key: consumer_key, 
                             consumer_secret: consumer_secret,
                             access_token_key: access_token_key,
                             access_token_secret: access_token_secret });
   
  var params = {screen_name: 'noragully'};

  client.get('statuses/home_timeline', params, function(error, tweets, response) {
    if (!error && response.statusCode == 200) {
      resp.send(tweets);
    } else {
      console.log(error);
    }
  });
}
 


module.exports = { 
  getTweets: getTweets
};
