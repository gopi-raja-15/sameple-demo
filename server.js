'use strict';

const express = require('express');
require('dotenv').config();
const aws = require('aws-sdk');
const s3 = new aws.S3();
// Constants
const PORT = 3000;
//const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Worjjjjhg Version 1'+process.env.API);
});

app.get('/api', (req, res) => {
  res.send('Hello Wooorld Version 2'+process.env.TASK_API);
});

app.get('/api-get', (req, res) => {
  res.send('Hello World Version 3 7');
});

app.get('/api/role', (req, res) => {
  res.send('role api execute');
});

app.get('/next', (req, res) => {
var params = {
  Bucket: "optiwisebucket", 
  Key: "index.jpeg"
 };
 s3.getObject(params, function(err, data) {
   if (err){ res.send(err, err.stack);} // an error occurred
   else { res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.write(data.Body, 'binary');
        res.end(null, 'binary');
        data.Body.toString('utf-8');}           // successful response
  
 });

});


app.listen(PORT);
console.log(`Running on ${PORT}`);
