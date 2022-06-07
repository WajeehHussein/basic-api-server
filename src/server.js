'use strict';
// require dotenv 
require('dotenv').config();
const PORT = process.env.PORT || 3000

// require express
const express = require('express');
const app = express();


// require all routes
const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500')
const foodRotes = require('./routes/food')
const clothesRouter = require('./routes/clothes')


// use this routes on all functions
app.use(express.json());
app.use(foodRotes)
app.use(clothesRouter)
app.use('*', notFound);
app.use(serverError);

// start function
function start() {
    app.listen(PORT, () => {
        console.log(`listen on PORT ${PORT}`);
    })
}

module.exports = {
    app: app,
    start: start,
}


/*
in server.js 
1. I need require every thing
2. use it on all functions
3. start function
4. export app (express) and start function   */ 