const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes.js')
const firebase = require('./firebase')

app.use((req, res, next) => {
	console.log(req.headers,'\n');
	next();
});
app.use(bodyParser.json());
app.use('', routes)

app.listen(3000)

module.exports = app