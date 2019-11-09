'use strict'
const teste = require('../model/client')

module.exports = {
    createClient: async (req, res) => {
        let payload = req.body
        console.log(payload);
        teste.create(res)
    },
    getAll: async (req, res) => {
        
    }

}
