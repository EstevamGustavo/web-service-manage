'use strict'
const db = require('../config/connection.js')

module.exports = {
    createUserDefault: async(user, res) => {
        let response = await db.connection()
            .execute("insert into entidade (ent_tipo_pessoa, ent_nome_razao_social, ent_cpf_cnpj) value (?,?,?);", [user.userType, user.userName, user.docNumber])
        console.log(response[0].insertId);

    }
}