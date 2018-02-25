const request = require('request')
const Twitter = require('twitter')
const consumer_key = require('./consumerKey.js');
const consumer_secret = require('./consumerSecret.js');
const access_token_key = require('./accessTokenKey.js');
const access_token_secret = require('./accessTokenSecret.js');
require('locus')

var client = new Twitter({ consumer_key: consumer_key, 
                           consumer_secret: consumer_secret,
                           access_token_key: access_token_key,
                           access_token_secret: access_token_secret });


function getTweets(request, resp, next){  
  var params = {screen_name: 'noragully', 
                tweet_mode: 'extended'};

  client.get('statuses/home_timeline.json?count=200', params, function(error, tweets, response) {
    if (!error && response.statusCode == 200) {
      resp.send(tweets);
    } else {
      console.log(error);
    }
  });
}

function filterTweets(req, resp, next) { 
  var params = {screen_name: 'noragully'};

}


module.exports = { 
  getTweets: getTweets
};
