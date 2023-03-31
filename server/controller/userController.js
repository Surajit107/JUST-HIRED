const User = require("../model/user");
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs');
const config = require('../config/config');

// SecurePassword
const securePassword = async (password) => {
    try {
        const hashPassword = await bcryptjs.hash(password, 10)
        // console.log(hashPassword);
        return hashPassword;
    } catch (err) {
        return res.status(400).json({ error: true, message: err.message })
    }
}

// CreateToken
const createToken = async (id) => {
    try {
        const token = await jwt.sign({ _id: id }, config.secret_key, { expiresIn: "5h" })
        console.log(token);
        return token;
    } catch (err) {
        return res.status(400).json({ error: true, message: err.message });
    }
}

// userSignUp
const userSignup = async (req, res) => {
    console.log("userSignup=>", req.body);
    const { full_name, email, phone, password } = req.body;
    const set_password = await securePassword(password)
    try {
        const user = User({
            full_name,
            email,
            phone,
            user_img: req.file.filename,
            password: set_password
        })
        const save_user = await user.save()
        console.log(save_user);
        const token = await createToken(save_user._id)
        return res.status(200).json({ success: true, message: "Registered Successfully", data: save_user, "token": token })
    } catch (exc) {
        return res.status(400).json({ error: true, message: exc });
    }
}

// userSignin
const userSignin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!(email && password)) {
            console.log("error");
            return res.status(400).json({ status: false, message: "All Inputs Are Required" })
        }
        const existingUser = await User.findOne({ email })
        if (existingUser && (bcryptjs.compareSync(password, existingUser.password))) {
            const token = await createToken(existingUser._id)
            return res.status(200).json({ success: true, message: "Login Successfully", "user": existingUser, "token": token })
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