'use strict';

const AuthRoute = require('./AuthRoute');
const FirebaseRoute = require('./FirebaseRoute');

module.exports = (api) => {   
   AuthRoute(api);
   FirebaseRoute(api);
}