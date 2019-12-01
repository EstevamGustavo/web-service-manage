'use strict'

// const router = require('router')
const state_city = require('../controller/stateCity')
const user = require('../controller/user')
const product = require('../controller/product')


module.exports = api => {

    api.route("/")
    .get(user.getAll)

    api.route('/api/v1/user')
        .get(user.nada)

    api.route('/api/v1/state')
        .get(state_city.getAllStates)

    api.route('/api/v1/city/:id')
        .get(state_city.getCityByState)

    api.route('/api/v1/product')
        .post(product.createProductDefault)
}