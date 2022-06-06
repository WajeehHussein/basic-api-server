'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 3001

const express = require('express');
const app = express();

const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500')
const foodRotes = require('./routes/food')

app.use(express.json());
app.use(foodRotes)

app.use('*', notFound);
app.use(serverError);

function start() {
    app.listen(PORT, () => {
        console.log(`listen on PORT ${PORT}`);
    })
}

module.exports = {
    app: app,
    start: start,
}
