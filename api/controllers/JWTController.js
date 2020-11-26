'use strict';

const jwt = require("jsonwebtoken");
const env = require('dotenv').config();

exports.generateToken = (data) => {
    return jwt.sign(data, process.env.SECRET_KEY, {expiresIn: 600});
}
