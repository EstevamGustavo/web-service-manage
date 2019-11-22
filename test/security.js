let security = require('../utils/security')
let mocha = require('mocha')
let chai = require('chai')

const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;

let user = {
    nome: "Gustavo"
}
var token;
var hash;

describe("TDD referente a criação e validação de tokens de usuarios logados.", () => {
    it("Criação de token: tokenSign(). Esperar uam saida string", () => {
        token = security.tokenSign(user, "secret")
        expect(token).to.be.string;
    })

    it("Validação de token de usuario : tokenValidate(), esperar saida string", () => {
        expect(security.tokenValidate(token, "secret")).to.be.instanceOf(Object)
    })

})

describe("TDD referente a criptograficade dados. Lib: Crypto-js", () => {
    it("Criptografar messagem: encrypt(), esperar saida string", () => {
        hash = security.encrypt(user, "secret")
        expect(hash).to.be.string
    })
    it("Comparação de hash: compareHash(), Espera true", () => {
        expect(security.compareHash(hash, user)).to.be.true
    })
    it("Comparação de hash com secret errada: compareHash(), Espera false", () => {
        expect(security.compareHash(hash, { nome: "thiago" })).to.be.false
    })
})