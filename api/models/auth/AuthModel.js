'use strict';

const select = require('../generic/Select');
const update = require('../generic/Update');

module.exports = {
    async get(req){

        let table = 'usuario';
        let data = {
            condicoes : [
                {"operador" : "", "comparador" : "=", "campo" : "email", "valor" : req.body.email},
                {"operador" : "AND", "comparador" : "=", "campo" : "pwd", "valor" : req.body.senha}
            ]
        }

        return await select.select({table, data});
    },

    put(...params){
        
        let table = 'usuario';
        let data = {
            dados : {
                "token" : params[0].token
            },
            condicoes : [
                {"condicao" : "", "comparador" : "=", "campo" : "id", "valor" : params[0].data.id}
            ]
        }

        update.update({table, data});
    }
};