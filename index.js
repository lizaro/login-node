const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, {useNewUrlParser: true},(err, data) =>{
    if(err){
        console.log('Could not connect to database: ',+config.db, err);
    }
    else{
       
        console.log('Connected to database: ' +config.db);
    }
});

app.get('*', (req, res)=>{
    res.send('<h1>hello world</h1>');
  });
  
  app.listen(8080, ()=>{
      console.log('listening to serve 8080')
  });