'use strict';

const express = require('express');
require('dotenv').config();
const aws = require('aws-sdk');
const s3 = new aws.S3();
const fs = require('fs');

// Constants
const PORT = 3000;
//const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello World Version 1' + process.env.API);
});

app.get('/api', (req, res) => {
	res.send('Hello World Version 2' + process.env.API);
});

app.get('/api-get', (req, res) => {
	res.send('Hello Worrrld Version 3 7');
});


app.get('/api-get-role', (req, res) => {
	res.send('Hello World Version 3 role get method 7');
});

app.get('/api/role', (req, res) => {
	res.send('role api execute');
});

app.get('/create', (req, res) => {
	let path = "./coco.png"
	fs.readFile(path, async function (err, data) {
		let params = {
			Bucket: "sample-test-demo-gopi",
			Key: Date.now() + '-' + "coco.png",
			Body: data,
			serverSideEncryption: 'aws:kms',
			sseKmsKeyId: "arn:aws:kms:us-west-1:172919200252:key/dffa8ae4-3c53-4619-b5f8-dfe762420ae1"
		};
		s3.upload(params, function (err, data) {
			if (err) {
				console.log(err);
				res.send(err);
			} else {
				console.log(data);
				res.send(data);

			}
		});
	});
});

app.get('/delete', (req, res) => {
	var params = {
		AccountId: '172919200252', /* required */
		Bucket: 'arn:aws:s3:::sample-test-demo-gopi' /* required */
	  };
	  s3.deleteBucketPolicy(params, function(err, data) {
		if (err) {
			console.log(err, err.stack); 
			res.send(err);

		}// an error occurred
		else     {
			console.log(data);  
			res.send(data);

		         }         // successful response
	  });
});


app.get('/next/:name', (req, res) => {
	let { name } = req.params;
	var params = {
		Bucket: "sample-test-demo-gopi",
		Key: name
	};
	s3.getObject(params, function (err, data) {
		if (err) { res.send(err, err.stack); } // an error occurred
		else {
			res.writeHead(200, { 'Content-Type': 'image/jpeg' });
			res.write(data.Body, 'binary');
			res.end(null, 'binary');
			data.Body.toString('utf-8');
		}           // successful response

	});

});


app.listen(PORT);
console.log(`Running on ${PORT}`);
