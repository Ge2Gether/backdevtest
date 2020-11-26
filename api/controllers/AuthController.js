'use strict';

const AuthModel = require('../models/auth/AuthModel');
const JWTController = require('./JWTController');

module.exports = {
    async auth(req, res){

        let result = await AuthModel.getUser(req);
        
        if(result.status == 200){
            if(result.payload.length > 0){

                let data = {
                    id : result.payload[0].id,
                    email: result.payload[0].email,
                    role : result.payload[0].role
                };

                let token = JWTController.generateToken(data);

                AuthModel.put({token, data});

                res.status(200).send({token});
            }else{
                res.status(401).send("Usuário não autenticado!");
            }
        }else{
            res.status(result.status);
        }
    },

    async authToken(token){

        let result = await AuthModel.getToken(token);
        
        if(result.payload.length > 0){
            return true;
        }else{
            return false;
        }
    }
};