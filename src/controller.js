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

function whyTho(request, response){
  // send the stuffs over to me 
  // i'll use the twitter package to grab the things 
  // once i get the timeline then i'll send it over to the front end
  eval(locus)
}

function getTweets(request, resp, next){
  console.log('getTweets run')
  var client = new Twitter({ consumer_key: consumer_key, 
                             consumer_secret: consumer_secret,
                             access_token_key: access_token_key,
                             access_token_secret: access_token_secret });
   
  var params = {screen_name: 'noragully'};

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      resp.send(tweets);
      console.log(tweets[0]);
    } else {
      console.log(error);
    }
  });
}
 


module.exports = {
  whyTho: whyTho, 
  getTweets: getTweets
};
