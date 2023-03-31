const jwt = require("jsonwebtoken");
const config = require("../config/config");

exports.authJwtSession = (req, res, next)=>{
    if(req.cookies && req.cookies.userToken){
        jwt.verify(req.cookies.userToken, config.secret_key, (error, result)=>{
            if(!error){
                req.user = result;
                next()
            }else{
                req.user = [];
            }
        })
    }else{
        next()
    }
}