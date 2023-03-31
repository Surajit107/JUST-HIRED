const {userModel} = require("../model/user");
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs');
const config = require('../config/config');

// SecurePassword
const securePassword = async (password) => {
    const hashPassword = await bcryptjs.hash(password, 10)
    // console.log(hashPassword);
    return hashPassword;
}

// CreateToken
const createToken = async (user) => {
    const token = await jwt.sign({ id : user._id, full_name: user.full_name, email: user.email }, config.secret_key, { expiresIn: "5h" })
    // console.log(token);
    return token;
}

// userSignUp
const userSignup = async (req, res) => {
    console.log("userSignup=>", req.body);
    const { full_name, email, phone, password } = req.body;
    const set_password = await securePassword(password)
    try {
        console.log("entry try =>");
        const user = userModel({
            full_name,
            email,
            phone,
            password: set_password
        })
        const save_user = await user.save();
        // console.log("Save Uer =>", save_user);
        return res.status(200).json({ success: true, message: "Registered Successfully", data: save_user })
    } catch (exc) {
        return res.status(400).json({ error: true, message: exc });
    }
}

// userSignin
const userSignin = async (req, res) => {
    console.log("userSignin=>", req.body);
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email });
        if (user && (bcryptjs.compareSync(password, user.password))) {
            const token = await createToken(user);
            res.cookie("userToken", token)
            return res.status(200).json({ success: true, message: "Logged In Successfully", "user": user, "token": token })
        } else {
            return res.status(404).json({ success: false, message: "Invalid Credentials" });
        }
    } catch (err) {
        return res.status(400).json(err.message)
    }
}


module.exports = {
    securePassword,
    createToken,
    userSignup,
    userSignin
}