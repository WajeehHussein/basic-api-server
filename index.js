'use strict';

require('dotenv').config();
let PORT = process.env.PORT || 3000

const server = require('./src/server')

const { db } = require('./src/models/index')
db.sync().then(() => {
    server.start(PORT);
})


/*
start point
 I need require 3 things 
    dotenv     server     sequelize in index model
    start() server on port
*/ 