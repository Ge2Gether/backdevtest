'use strict';

const jwt = require("jsonwebtoken");

exports.generateToken = (data) => {
    return jwt.sign(data, 'seila');
}
