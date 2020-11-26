'use strict';

const FirebaseModel = require("../models/firebase/FirebaseModel");

module.exports = {
    async getById(req, res){
        
        let result = await FirebaseModel.get(req.params.id);

        res.status(200).send(result);
    },
    async post(req, res){        
        let result = await FirebaseModel.post(req.params.id);

        res.status(200).send(result);
    }
}