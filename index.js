
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

consign()
    .include('routes')
    .into(app)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Express started at http://localhost:${PORT}...`)
})