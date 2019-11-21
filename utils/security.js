const crypto = require('crypto')
const jwt = require('jsonwebtoken');

module.exports.security = {
    encrypt: (message) => {
        return crypto.sha512.encrypt(message, "secret")
    },
    decrypt: (hash) => {
        return crypto.sha512.decrypt(hash, "secret")
    },
    tokenSign: (user) => {
        return jwt.sign(user, "secret")
    },
    tokenValidate: (token) => {
        return jwt.verify(token, "secret", (err, decoded) => {
            console.log(err);
        })
    }
}