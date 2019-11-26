'use strict'
const userModel = require('../model/user')

module.exports = {
    createProductDefault: async(req, res) => {
       let product = req.body
        console.log(product);
        
        res.send("ok response")
    },
    getAll: async(req, res) => {
        console.log("teste");
        res.send("ok")
        
    }

}