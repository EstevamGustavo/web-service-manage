'use strict'

// const router = require('router')
const state_city = require('../controller/stateCity')
const user = require('../controller/user')
const product = require('../controller/product')
const sign = require('../controller/sign')


module.exports = api => {

    api.route('/api/v1/user')
        .post(user.createUserDefault)
        .get(user.getAll)

    api.route('/api/v1/state')
        .get(state_city.getAllStates)

    api.route('/api/v1/city/:id')
        .get(state_city.getCityByState)

    api.route('/api/v1/genero')
        .get(product.getCategories)

    api.route('/api/v1/plataforma')
        .get(product.getPlataformas)

    api.route('/api/v1/product')
        .post(product.createProductDefault)
        .get(product.getAll)

    api.route('/api/v1/product/:id')
        .get(product.getProductById)

    api.route('/api/v1/getbyuser/:ent')
        .get(product.getProductByUser)

    api.route('/api/v1/sign')
        .post(sign.signUser)

    api.route('/api/v1/update')
        .post(product.updateImage)
}