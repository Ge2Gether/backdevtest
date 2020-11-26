'use strict';

const FirebaseController = require('../controllers/FirebaseController');

module.exports = (api) => {
    api.get('/profiles/:id', FirebaseController.getById);
    api.post('/like/:id', FirebaseController.post);
}