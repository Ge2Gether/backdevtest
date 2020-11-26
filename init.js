'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const api = express();

const allowCors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

	next();
};

api.use(allowCors);
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({
    extended : true
}));

require('./api/routes/index')(api);

api.listen(8080, () => console.log('Api rodando!'));