const express = require('express');
let app = express();
let db = require('../database/index.js');
var bodyParser = require('body-parser');
let githubHelper = require('../helpers/github.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


app.post('/Repos', function (req, res) {
  // TODO - your code here!
  // [x]This route should take the github username provided
  let username = req.body.value; //should get the username as a string
  // [x]and get the repo information from the github API, then
  console.log('this is the user name-=-=-=>', username);
  
  githubHelper.getReposByUsername(username, (gitData)=>{
    console.log('from the server post ******the gitData--->',gitData);
    
    db.add(gitData);

    res.send()
    
  });

  // [x]save the repo information in the database
//[ ]call the save function on the index.js db file to store the new repo
//[ ]request the entire data base with the app.get func below
//[ ]respond with the data received from the get respond

//console.log('from server post  req----------------------------------------', req.body);
 // res.send(JSON.stringify({message:'server post send--your git info==>>>', {content:[req.body]}));

});

app.get('/Repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
//console.log('from the server res.body ->', req.body)
  
  let query = db.get((query)=>{res.send(query)});

});





let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

//app.get();
