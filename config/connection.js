
const mysql = require('mysql2');
require('dotenv').config()


exports.CONN = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD
  });
