const mysql = require('mysql2');
const dbConfig = require('./config');

const con = mysql.createConnection({
    host : dbConfig.HOST,
    user : dbConfig.USER,
    password : dbConfig.PASSWORD,
    database : dbConfig.DB,
    port : 3306
});

con.connect();

module.exports = con;