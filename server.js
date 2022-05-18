const express = require('express');
const budget = require('./models/budget');

// initialize express application
const app = express();

// configure application settings
const port = 3000;



app.listen(port, () =>{
    console.log(`Listening on port`, port)
});