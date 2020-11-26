'use strict';

const mysql = require('mysql');
const env = require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit : 10,
    host     : process.env.DB_HOST,
    database : process.env.DB_DATABASE,
    user     : process.env.DB_USER,
    password : process.env.DB_PWD
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