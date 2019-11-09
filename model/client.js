
const DB = require('../config/connection.js')

module.exports = {
    create: async (res) => {
        DB.CONN.execute("insert into permission_user (permission) value ('teste');")
    }
}


