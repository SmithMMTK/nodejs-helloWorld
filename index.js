// ***************************************************************************
// Bank API code from Web Dev For Beginners project
// https://github.com/microsoft/Web-Dev-For-Beginners/tree/main/7-bank-project/api
// ***************************************************************************

const express = require('express');
const pkg = require('./package.json');


// App constants
const port = process.env.PORT || 3000;

  
// Create the Express app & setup middlewares
const app = express();


// Configure routes
const router = express.Router();

// Hello World for index page and echo current date and time
app.get('/', function (req, res) {
    let currentDate = new Date();
    
    return res.send(`Hello World! Current date and time is: ${currentDate}`);
})

// ***************************************************************************


// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});