const express = require('express');
let app = express();
let db = require('../database/index.js');
var bodyParser = require('body-parser');
let githubHelper = require('../helpers/github.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


app.post('/Repo', function (req, res) {
  
  let username = req.body.value;
  githubHelper.getReposByUsername(username, (gitData)=>{
    db.save(gitData);
    res.sendStatus(201);
  });

});

app.get('/Repos', function (req, res) {
  // This route should send back the top 25 repos
//console.log('from the server res -..........---->', JSON.stringify({value:'thisisatest'}))
  
  let data; 

  db.get((query)=>{
    let data = JSON.stringify(query);
      console.log('from inside db.get in app.get server.index.js===============>>>',typeof data)
     // console.log(JSON.stringify(query))
     res.send(data);
  });


});



let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});