const db = require('../config/connection')

module.exports = {
    signUser: async(login) => {
        let user = await db.connection()
            .query('select * from usuario where usu_login = ?;', [login])
        return JSON.parse(JSON.stringify(user[0][0]))
    },
    
}