const { secret_key } = require("./secretKey");
const jwt = require('jsonwebtoken')

// CreateToken
const createToken = async (user) => {
    const token = await jwt.sign({ id: user._id, full_name: user.full_name, email: user.email }, secret_key, { expiresIn: "5h" })
    // console.log(token);
    return token;
}

module.exports = createToken;