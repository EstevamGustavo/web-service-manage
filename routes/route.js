'use strict'

// const router = require('router')
const state_city = require('../controller/stateCity')
const user = require('../controller/user')


module.exports = api => {

    api.route('/api/v1/user')
        .post(user.createUserDefault)

    api.route('/state')
        .get(state_city.getAllStates)

    api.route('/city/:id')
        .get(state_city.getCityByState)
}