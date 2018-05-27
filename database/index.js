const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function() {console.log('mongoose - we\'re connnected')});

let repoSchema = mongoose.Schema(
 {
    id: Number,
    repos_url: String,

    name: String,
    location:String,
    followers: Number,
    public_repos: Number,
    html_url: String
  }
);

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoObj) => {
  


  // var temp = new Repo(repoObj);
  // temp.save(function(err,data) {
  //   if (err)return handleError(err);
  // });
}


let add = function (stringifiedArray) {
//for aevery item, 
//parse, 
// create a new object with owner data and and array of repos
//for each run the save function . 
let userObj = {};
let firstRepo = JSON.parse(stringifiedArray);
console.log(firstRepo);

 //  stringifiedArray.map(function(obj){
 //    //let = JSON.parse(obj);



 // })
}



let get = function (callback, query) {
Repo.
  find({}).
  limit(25).
  sort({watchers_count: -1}).
  select({}).
  exec((err, data)=>{
    if (err) {
      console.error(err);
    };
    callback(data);
    console.log('data from db', data);
  });
}

module.exports.save = save;
module.exports.get  = get;
module.exports.add = add;

