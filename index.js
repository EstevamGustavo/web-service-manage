const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const consign = require('consign');
const mysql = require('mysql2');

require('dotenv').config()

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

consign()
    .include('routes')
    .into(app)



let port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Express started at http://localhost:${port}...`)
})

module.exports.piWebService = app