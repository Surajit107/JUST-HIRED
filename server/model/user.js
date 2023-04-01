const mongoose = require("mongoose");
const joi = require("joi");

const Schema = mongoose.Schema;
const userSchema = new Schema({
    full_name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        require: true,
        unique: true,
    },
    role: {
        type: String,
        default: "Basic",
    },
    user_status: {
        type: Boolean,
        default: false
    },
    user_img: {
        type: String,
    },
    password: {
        type: String,
        require: true,
    },
}, { timestamps: true });


const userModel = mongoose.model("user", userSchema);

const validateUser = (user) => {
    const schema = joi.object({
        full_name: joi.string().min(3).required().pattern(/^[a-zA-Z ]+$/).messages({
            "string.empty": "Name is Required!!!",
            "string.min": "Name Should Be Atleast 3 Characters Long!!!",
            "string.pattern.base": "Alphabets & Blank Spaces Only!!!",
        }),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'in'] } }).required().messages({
            "string.empty": "Email is Required!!!",
            "string.email":"Invalid Email Format!!!"
        }),
        phone: joi.string().min(10).max(10).required().messages({
            "string.empty": "Phone is Required!!!",
            "string.min": "Phone Number should be of 10 Digits",
            "string.max": "Phone Number should be of 10 Digits",
        }),
        password: joi.string().min(8).max(16).required().messages({
            "string.empty": "Password is Required!!!",
            "string.min": "Password Should Be 8 Characters Long!!!",
            "string.max": "Password Should Not Exceed 16 Characters!!!",
        }),
    })
    return schema.validate(user);
}

module.exports = {
    userModel,
    validateUser,
}