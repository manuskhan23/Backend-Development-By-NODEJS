const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'DbAccess@2026#Xy9',
    database: 'airbnb'
})

module.exports = connection.promise();