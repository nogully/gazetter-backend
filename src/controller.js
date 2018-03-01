const request = require('request')
const Twitter = require('twitter')
const consumer_key = require('./consumerKey.js');
const consumer_secret = require('./consumerSecret.js');
const access_token_key = require('./accessTokenKey.js');
const access_token_secret = require('./accessTokenSecret.js');
require('locus')


function getTweets(request, resp, next){  
  console.log(request) 

  var client = new Twitter({ consumer_key: consumer_key, 
                           consumer_secret: consumer_secret,
                           access_token_key: access_token_key,
                           access_token_secret: access_token_secret });
  var params = {screen_name: 'noragully', 
                tweet_mode: 'extended'};

  client.get('statuses/home_timeline.json?count=200', params, function(error, tweets, response) {
    try {
      if (!error && response.statusCode == 200) {
        resp.send(tweets);
      } else {
        throw (error);
      }
    } catch (error) {
      throw (error);
    }
  });
}

function userLogin(request, resp, next) {
  var token = request.body.token;   
  var secret = request.body.secret;
  var name = request.body.username
  console.log(request)
  var client = new Twitter({ consumer_key: consumer_key, 
                           consumer_secret: consumer_secret,
                           access_token_key: token,
                           access_token_secret: secret });
  var params = { screen_name: username, 
                 tweet_mode: 'extended' };

  client.get('statuses/home_timeline.json?count=200', params, function(error, tweets, response) {
    try {
      if (!error && response.statusCode == 200) {
        resp.send(tweets);
      } else {
        throw (error);
      }
    } catch (error) {
      throw (error);
    }
  });
}


module.exports = { 
  getTweets: getTweets,
  userLogin: userLogin
};
