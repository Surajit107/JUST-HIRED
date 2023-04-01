const { userModel } = require("../model/user");
const { contactModel } = require("../model/contact");
const bcryptjs = require('bcryptjs');
const securePassword = require("../config/securePassword");
const createToken = require("../config/createToken");

// userSignUp
exports.userSignup = async (req, res) => {
    // console.log("userSignup=>", req.body);
    const { full_name, email, phone, password } = req.body;
    const set_password = await securePassword(password)
    try {
        // console.log("entry try =>");
        const user = userModel({
            full_name,
            email,
            phone,
            password: set_password
        })
        const save_user = await user.save();
        if (save_user) {
            return res.status(200).json({ success: true, message: "Registered Successfully" })
        } else {
            return res.status(400).json({ success: false, message: "Something went wrong. Try Again" });
        }
    } catch (exc) {
        return res.status(400).json({ error: true, message: exc.message });
    }
}

// userSignin
exports.userSignin = async (req, res) => {
    // console.log("userSignin=>", req.body);
    const { email, password } = req.body
    try {
        if (email && password) {
            const user = await userModel.findOne({ email });
            if (user && (bcryptjs.compareSync(password, user.password))) {
                const token = await createToken(user);
                res.cookie("userToken", token)
                return res.status(200).json({ success: true, message: "Logged In Successfully", "user": user, "token": token })
            } else {
                return res.status(404).json({ success: false, message: "Invalid Credentials" });
            }
        } else {
            return res.status(404).json({ success: false, message: "All Fields are Required" });
        }
    } catch (exc) {
        return res.status(400).json({ error: true, message: exc.message })
    }
}

// contact us
exports.contactUs = async (req, res) => {
    // console.log("contactUs=>", req.body);
    const { name, email, phone, subject, message } = req.body;
    try {
        if (name && email && phone && subject && message) {
            const result = await contactModel({
                name, email, phone, subject, message
            });
            const saveResult = await result.save();
            if (saveResult) {
                return res.status(200).json({ success: true, message: "Query has been Submitted Successfully" })
            } else {
                return res.status(400).json({ success: false, message: "Something went wrong. Try Again" });
            }
        } else {
            return res.status(400).json({ success: false, message: "All Fields are Required" });
        }
    } catch (exc) {
        return res.status(400).json({ error: true, message: exc.message })
    }
}