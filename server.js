'use strict';

const express = require('express');
require('dotenv').config();
const mongoose = require("mongoose");

// Constants
const PORT = 3000;
//const HOST = '0.0.0.0';

// App
const app = express();
var client = mongoose.connect(
	'mongodb://root:<insertYourPassword>@docdb-2022-06-25-06-15-08.cluster-cnfrcgjddpqo.us-east-1.docdb.amazonaws.com:27017/?replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false', 
	{ 
		useNewUrlParser: true
	},
	
	function(err, client) {
		if(err){
			console.log("DB not Connected")

			console.log(JSON.stringify(err))
			throw err;
		} else {
		console.log("DB Connected")
		}
		//Specify the database to be used
		// db = client.db('sample-database');

		
	});

app.get('/', (req, res) => {
	console.log("Hit------------->1")
	res.send('Hello World Version 1' + process.env.API);
});

app.get('/api', (req, res) => {
		console.log("Hit------------->2")
	res.send('Hello World Version 2' + process.env.API);
});

app.get('/api-get', (req, res) => {
		console.log("Hit------------->3")
	res.send('Hello Worrrld Version 3 7');
});


app.get('/api-get-role', (req, res) => {
		console.log("Hit------------->4")
	res.send('Hello World Version 3 role get method 7');
});

app.get('/api/role', (req, res) => {
		console.log("Hit------------->5")
	 res.status(200).json({
            status: 'success',
            payload: "ROLE",
            message: 'ROLE Fetched successfully'
        });
});

app.listen(PORT);
console.log(`Running on ${PORT}`);
