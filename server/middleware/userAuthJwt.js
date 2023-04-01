const jwt = require("jsonwebtoken");
const { secret_key } = require("../config/secretKey");

exports.authJwtSession = (req, res, next) => {
    if (req.cookies && req.cookies.userToken) {
        jwt.verify(req.cookies.userToken, secret_key, (error, result) => {
            if (!error) {
                req.user = result;
                next()
            } else {
                req.user = [];
            }
        })
    } else {
        next()
    }
}