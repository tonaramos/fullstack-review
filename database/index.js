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
      //if (err)return handleError(err);  <--- not handleling the error case
    });
  }
}

// let add = function (stringifiedArray) {   // <----- not using this function at this time
//   let userObj = {};
//   let firstRepo = JSON.parse(stringifiedArray);
//   console.log('this is a readlable Array with objs ->>>>',stringifiedArray);
//}

let get = function (callback, userObj) {

Repo.find(userObj ? {'login': userObj.login, 'repoName': userObj.repoName } : {}, '', 
  
  function(err, repoArray) {
  //console.log('repo.find on get dB returned this HHHHHHH->', repoArray);
  if (err) console.log('errorFromTheGetDBFunction!!!!', err);

console.log('repoArray from database/index.jsx=================', repoArray)
callback(repoArray);

})












//from the inside of the for loop in save
  //this.get((dbObj)=>{
    
    // if (dbObj !== this.tempObj){
    //   tempObj.save(function(err,data) {
    //     if (err)return handleError(err);
    //   });
    // };
    // },tempObj);
}

module.exports.save = save;
module.exports.get  = get;
//module.exports.add = add;

