const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT;

const routes = require('./routes')

app.use('/', routes);

app.listen(port, () => {
    console.log(`Web Service listening on Port ${port}`);
});