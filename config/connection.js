const mysql = require('mysql2');
require('dotenv').config()


module.exports = {
    connection: () => {
        return mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            database: process.env.DATABASE_NAME,
            password: process.env.DATABASE_PASSWORD
        }).promise()
    }
}