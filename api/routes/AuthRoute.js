'use strict';

const AuthController = require('../controllers/AuthController');

module.exports = (api) => {
    api.post('/auth', AuthController.auth);
 }