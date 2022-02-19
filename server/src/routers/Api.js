const express = require('express');
const Api = express.Router();

Api.get('/', (req, res) => {
   res.send('Hello, World!');
});

Api.use('/items', require('./items'));

module.exports = Api;