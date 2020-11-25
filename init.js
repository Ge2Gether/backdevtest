'use strict';

const express = require('express');

const api = express();

require('./api/routes/index')(api);

const allowCors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

	next();
};

api.use(allowCors);
api.use(express.json());
api.listen(8080, () => console.log('Api rodando!'));