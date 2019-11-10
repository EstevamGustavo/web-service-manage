const db = require('../config/connection')

module.exports = {
    getAllStates: async(res) => {
        var estados
        let result = await db.connection().query("select * from estados;")
        res.send(result[0]);

    },
    getCityByState: async(res, id_estado) => {
        var estados
        let result = await db.connection().query("select * from municipios where estado_mun = ?;", [id_estado])
        res.send(result[0]);

    }
}