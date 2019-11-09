'use strict'

// const router = require('router')
const Client = require('../controller/client')


module.exports = api => {

    api.route('/client')
        .post(Client.createClient)

}

console.log();
