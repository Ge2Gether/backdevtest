'use strict';

const select = require('../generic/Select');

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
    }
};