const db = require('../config/connection')

module.exports = {
    getCategories: async(login) => {
        let product = await db.connection()
            .query('select * from genero;')
        return JSON.parse(JSON.stringify(product))
    },
    getPlataforma: async() => {
        let product = await db.connection()
            .query('select * from plataforma;')
        return JSON.parse(JSON.stringify(product[0]))
    },
    createProductDefault: async(prod) => {


        let product = await db.connection()
            .execute("insert into" +
                "	produto (prod_id_entidade,prod_id_plataforma,prod_id_genero, " +
                "prod_ano_fabricacao,prod_ano_modelo,prod_descricao,prod_qtde,prod_vl_venda,prod_obs) " +
                "values " +
                "(?,?,?,?,?,?,?,?,?);", [
                    prod.entidade,
                    prod.plataforma,
                    prod.genero,
                    prod.data_fabricacao,
                    prod.data_modelo,
                    prod.descricao,
                    prod.quantidade,
                    prod.venda,
                    prod.observacao
                ])
        return JSON.parse(JSON.stringify(product[0]))
    },
    getAllProducts: async() => {
        let product = await db.connection()
            .query("SELECT " +
                "p.prod_id," +
                "p.prod_id_entidade," +
                "e.ent_nome_razao_social," +
                "e.ent_cpf_cnpj," +
                "e.ent_obs," +
                "p.prod_ano_fabricacao," +
                "p.prod_ano_modelo," +
                "p.prod_descricao," +
                "p.prod_codigo_barra," +
                "p.prod_qtde," +
                "p.prod_vl_venda," +
                "p.prod_obs," +
                "pp.img_caminho " +
                "FROM produto p " +
                "INNER JOIN entidade e ON p.prod_id_entidade = e.ent_id " +
                "INNER JOIN plataforma pl ON p.prod_id_plataforma = pl.plat_id " +
                "INNER JOIN genero g ON p.prod_id_genero = g.gen_id " +
                "INNER JOIN produto_img pp ON pp.img_id_produto = p.prod_id ")
        return JSON.parse(JSON.stringify(product[0]))
    },
    getProductById: async(id_prod, id_ent) => {
        let product = await db.connection()
            .query("SELECT " +
                "p.prod_id," +
                "p.prod_id_entidade," +
                "e.ent_nome_razao_social," +
                "e.ent_cpf_cnpj," +
                "e.ent_obs," +
                "p.prod_ano_fabricacao," +
                "p.prod_ano_modelo," +
                "p.prod_descricao," +
                "p.prod_codigo_barra," +
                "p.prod_qtde," +
                "p.prod_vl_venda," +
                "p.prod_obs," +
                "pp.img_caminho " +
                "FROM produto p " +
                "INNER JOIN entidade e ON p.prod_id_entidade = e.ent_id " +
                "INNER JOIN plataforma pl ON p.prod_id_plataforma = pl.plat_id " +
                "INNER JOIN genero g ON p.prod_id_genero = g.gen_id " +
                "INNER JOIN produto_img pp ON pp.img_id_produto = p.prod_id " +
                "WHERE p.prod_id = ?;", [id_prod])
        return JSON.parse(JSON.stringify(product[0]))
    },
    getProductByUser: async(id_ent) => {
        let product = await db.connection()
            .query("SELECT " +
                "p.prod_id," +
                "p.prod_id_entidade," +
                "e.ent_nome_razao_social," +
                "e.ent_cpf_cnpj," +
                "e.ent_obs," +
                "p.prod_ano_fabricacao," +
                "p.prod_ano_modelo," +
                "p.prod_descricao," +
                "p.prod_codigo_barra," +
                "p.prod_qtde," +
                "p.prod_vl_venda," +
                "p.prod_obs," +
                "pp.img_caminho " +
                "FROM produto p " +
                "INNER JOIN entidade e ON p.prod_id_entidade = e.ent_id " +
                "INNER JOIN plataforma pl ON p.prod_id_plataforma = pl.plat_id " +
                "INNER JOIN genero g ON p.prod_id_genero = g.gen_id " +
                "INNER JOIN produto_img pp ON pp.img_id_produto = p.prod_id " +
                "WHERE p.prod_id_entidade = ?;", [id_ent])
        return JSON.parse(JSON.stringify(product[0]))
    },
    updateImage: async(productId, url) => {
        let product = await db.connection()
            .execute("insert into produto_img(img_id_produto, img_caminho) values(?,?);", [productId, url])
        return JSON.parse(JSON.stringify(product[0]))
    }
}