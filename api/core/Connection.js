'use strict';

const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    database : 'backendtest',
    user     : 'houmar',
    password : 'houmar'
});

exports.query = (string, params = null) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {

            if(error){
                reject(error);
            }else{
                connection.query(string, params, (error, response) => {

                    if(error){
                        reject(error);
                    }else{
                        resolve(response);
                    }
                    
                });
            }

            connection.release();
        })
    });
};