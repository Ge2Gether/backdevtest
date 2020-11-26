'use strict';

const fb = require('firebase');
const env = require('dotenv').config();

let fbConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};

module.exports = {
    initialize(){
        
        if(fb.apps.length <= 0){
            fb.initializeApp(fbConfig);
        }

        return fb.firestore();
    }
};

