'use strict';

const fb = require('../../core/Firebase');

module.exports = {
    async get(id){
        
        let db = fb.initialize();
        let dados = [];

        await db.collection('profiles').where('id', '==', parseInt(id)).get()
            .then((response) => {
                response.forEach((item) => {
                    dados.push(item.data());
                });
            });

        return dados;
    },

    async post(id){

        let db = fb.initialize();
        let dados = [];

        await db.collection('profiles').where('id', '==', parseInt(id)).get()
            .then((response) => {
                response.forEach((item) => {
                    if(item.data().id == parseInt(id)){
                        
                        let newlike = item.data().likes + 1;
                        
                        db.collection('profiles').doc(item.id).update({ likes : newlike });

                        item.data().likes = newlike;

                        dados.push(item.data());
                    }
                });
            });

        return dados;
    }
}