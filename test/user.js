let user = require('../model/user')
let mocha = require('mocha')
let chai = require('chai')

const assert = chai.assert;

describe("TDD referente a cruds realizados na entidade User.", () => {
    it("ação deve realizar criação de User.", () => {
        let user = {

        }
        assert.equal(user.createUserDefault())
    })
})