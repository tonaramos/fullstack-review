const request = require('request');
const config = require('../config.js');




let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,  
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  let callbackFunc = function (error, response, body) {
    if (!error && response.statusCode === 200) {
      let info = JSON.parse(body);
      callback(body);
    } 
    if (error) {
      console.log('error at callback in helpers/github', error);
    }
  }
request(options, callbackFunc);
//console.log('end of the the getReposByUsername function==============================')
}

module.exports.getReposByUsername = getReposByUsername;




