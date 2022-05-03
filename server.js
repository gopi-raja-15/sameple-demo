'use strict';

const express = require('express');
require('dotenv').config();

// Constants
const PORT = 3000;
//const HOST = '0.0.0.0';

// App
const app = express();
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
