const crypto = require('crypto-js')
const jwt = require('jsonwebtoken');

module.exports = {
    encrypt: (senha) => {
        return crypto.SHA512(senha).toString(crypto.enc.Hex)
    },
    compareHash: (hash, senha) => {
        let compare = false
        let hashCompare = crypto.SHA512(senha).toString(crypto.enc.Hex)
        if (hash === hashCompare) {
            compare = true;
        }
        return compare
    },
    tokenSign: (user, secret) => {
        return jwt.sign(user, secret)
    },
    tokenValidate: (token, secret) => {
        return jwt.verify(token, secret, (err, decoded) => {
            return decoded
        })
    }
}