'use strict'
const db = require('../config/connection.js')
//isso é um comentario
module.exports = {
    createUserDefault: async(user, res) => {
        let response = await db.connection()
            .execute("insert into entidade (ent_tipo_pessoa, ent_nome_razao_social, ent_cpf_cnpj) value (?,?,?);", [user.tipoPessoa, user.nome, user.cpf])
        let responseAddress = await db.connection()
        .execute("insert into endereco (end_id_entidade, end_logradouro, end_numero, end_complemento, end_bairro, end_cep, end_id_municipios) value (?,?,?,?,?,?,?);",
            [response[0].insertId, user.rua, user.numero, user.complemento, user.bairro, user.cep, user.city])

        if(user.fone2 == undefined){
            user.fone2 = null
        }
        let responseContact = await db.connection()
        .execute("insert into agenda (age_id_entidade, age_fone1, age_fone2, age_email) value (?,?,?,?);",
            [response[0].insertId, user.fone1, user.fone2, user.email])
        console.log(response[0].insertId);
        console.log(responseAddress[0].insertId);
        

    }
}