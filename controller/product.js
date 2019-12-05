'use strict'
const productModel = require('../model/product')

module.exports = {
    createProductDefault: async(req, res) => {
        let product = req.body
        let response = await productModel.createProductDefault(JSON.parse(JSON.stringify(product)))
        res.send(response)
    },
    getAll: async(req, res) => {
        let response = await productModel.getAllProducts()
        res.send(response)

    },
    getProductById: async(req, res) => {
        let prod_id = req.params.id
        let response = await productModel.getProductById(prod_id)
        res.send(response)
    },
    getCategories: async(req, res) => {
        res.send(await productModel.getCategories())
    },
    getPlataformas: async(req, res) => {
        res.send(await productModel.getPlataforma())
    },
    getProductByUser: async(req, res) => {
        let id_ent = req.params.ent
        res.send(await productModel.getProductByUser(id_ent))
    },
    updateImage: async(req, res) => {
        let payload = req.body
        res.send(await productModel.updateImage(payload.id, payload.url))
    }

}