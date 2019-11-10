'use strict'
const model = require('../model/stateCity')

module.exports = {
    getAllStates: async(req, res) => {
        let response = await model.getAllStates(res);
    },
    getCityByState: async(req, res) => {
        let state = req.params.id
        let response = await model.getCityByState(res, state)
    }
}