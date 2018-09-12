const express = require('express');// Fast, unopinionated, minimalist web framework for node
const app = express();// initiate express application
const router = express.Router();
const mongoose = require('mongoose');//node tool for mongodb
const config = require('./config/database');
const path = require('path');//node js package for file paths
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');

//provide static directory to fronend
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + '/bizb/dist/bizb/'));
app.use('/authentication', authentication);
//connect server to angular6 index.html
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname + '/bizb/dist/bizb/index.html'));
  });
  
  app.listen(8080, ()=>{
      console.log('listening to serve 8080')
  });

  //Database Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, {useNewUrlParser: true},(err, data) =>{
    if(err){
        console.log('Could not connect to database: ',+config.db, err);
    }
    else{
       
        console.log('Connected to database: ' +config.db);
    }
});