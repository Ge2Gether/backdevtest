const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    database : 'dbtest',
    user     : 'root',
    password : '123456'
});

exports.query = (string) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if(error){
                reject(error);
            }else{
                connection.query(string, (error, rows) => {
                    if(error){
                        reject(error);
                    }else{
                        resolve(rows);
                    }
                });
            }
        })
    });
};