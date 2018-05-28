const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function() {console.log('mongoose - we\'re connnected')});

let repoSchema = mongoose.Schema(
 {
    login: String,
    url: String,
    repoName: String,
    stargazers_count: Number,
    watchers: Number,
    html_url: { type: String, unique: true}
  }
);

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoArr) => {
  let tempArr = JSON.parse(repoArr);
  for (let i = 0; i < tempArr.length; i++ ) {
    let tempObj = {
      login: tempArr[i].owner.login,
      url: tempArr[i].owner.html_url,
      repoName: tempArr[i].name,
      stargazers_count: tempArr[i].stargazers_count,
      watchers: tempArr[i].watchers,
      html_url: tempArr[i].html_url
    }
    let tempVar = new Repo(tempObj);
    tempVar.save(function(err,data) {
    });
  }
}

let get = function (callback, userObj) {
  Repo.find(userObj ? {'login': userObj.login, 'repoName': userObj.repoName } : {}, '', 
    function(err, repoArray) {
    if (err) console.log('errorFromTheGetDBFunction', err);
  callback(repoArray);
  })
}

module.exports.save = save;
module.exports.get  = get;