'use strict';
const snoowrap = require('snoowrap');

/* Create a new snoowrap requester. If you're uncomfortable storing confidential info in your file, one solution is to
simply store it in a json file and require() it. For more information on how to get valid credentials, see here: https://github.com/not-an-aardvark/reddit-oauth-helper */
const r = new snoowrap({
  client_id: 'put your client id here',
  client_secret: 'put your client secret here',
  refresh_token: 'put your refresh token here',
  user_agent: 'put your user-agent string here' // for more information, see: https://github.com/reddit/reddit/wiki/API
});

/* That's the entire setup process, now you can just make requests. I would recommend including async functions in your project
by using babel.js (or some equivalent), but this example file uses vanilla Promises for simplicity. */

// Submitting a link to a subreddit
r.get_subreddit('gifs').submit_link({
  title: 'Mt. Cameramanjaro',
  url: 'https://i.imgur.com/n5iOc72.gifv'
});

// Printing a list of the titles on the front page
r.get_hot().map(post => post.title).then(console.log);

// Extracting every comment on a thread
r.get_submission('4j8p6d').expand_replies({limit: Infinity, depth: Infinity}).then(console.log)
