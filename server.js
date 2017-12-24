console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('statuses/filter', { track: 'Payton Manning' })

stream.on('tweet', tweetEvent);

function tweetEvent(tweet) {
    var reply_to = tweet.in_reply_to_screen_name;
    var text       = tweet.text;
    var from       = tweet.user.screen_name;
    var nameID     = tweet.id_str;
    // params just to see what is going on with the tweets
    var params     = {reply_to, text, from, nameID};
    T.post('statuses/retweet/:id', { id: nameID }, function (err, data, response) {
  	console.log('New tweet retweeted',text)
	})
    /*
    console.log(params);


        var new_tweet = '@' + from + " Hey there partner, you should try spelling the 🐐's name correctly";
        var tweet = {
            status: new_tweet,
            in_reply_to_status_id: nameID
        }

        T.post('statuses/retweet/:id', { id: nameID }, tweeted);

        function tweeted(err, data, response) {
            if (err) {
                console.log("Something went wrong!");
            } else {
                console.log("It worked!");
            }
        }
        */
}