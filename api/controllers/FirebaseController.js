'use strict';

const FirebaseModel = require("../models/firebase/FirebaseModel");
const AuthController = require("./AuthController");

module.exports = {
    async getById(req, res){

        if(req.headers['authorization'] == undefined ||
            req.headers['authorization'] == ""){
            
            res.status(401).send("Necessário fornecer o Token!");

            return false;
        }

        AuthController.authToken(req.headers['authorization']).then((response) => {
            if(response){
                FirebaseModel.post(req.params.id).then(response => res.status(200).send(response));
            }else{
                res.status(401).send("Token inválido");
            }
        });
        
    },
    
    post(req, res){
        
        if(req.headers['authorization'] == undefined ||
            req.headers['authorization'] == ""){
            
            res.status(401).send("Necessário fornecer o Token!");

            return false;
        }

        AuthController.authToken(req.headers['authorization']).then((response) => {
            if(response){
                FirebaseModel.post(req.params.id).then(response => res.status(200).send(response));
            }else{
                res.status(401).send("Token inválido");
            }
        });
    }
}