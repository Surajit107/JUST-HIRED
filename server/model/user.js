const mongoose = require("mongoose");
const joi = require("joi");

const Schema = mongoose.Schema;
const userSchema = new Schema({
    full_name:{
        type: String,
        require: [true, "Name is required!"],
    },
    email:{
        type:String,
        require:[true, "Email is required!"],
        unique: true,
        lowercase: true
    },
    phone:{
        type: String,
        require:[true, "Phone is required!"],
        unique: true,
    },
    role:{
        type:String,
        default:"Basic",
    },
    user_status:{
        type: Boolean,
        default: false
    },
    user_img:{
        type:String,
    },
    password:{
        type:String,
        require:[true, "Password is required!"]
    },
}, {timestamps: true});


const userModel = mongoose.model("user", userSchema);

const validateUser =(user)=>{
    const schema = joi.object({
        name: joi.string().min(3).max(40).required(),
        email:joi.string().email().required(),
        phone:joi.number().min(10).required(),
        password:joi.string().min(8).max(16).alphanum().required(),
    })
    return schema.validate(user);
}

module.exports = {
    userModel,
    validateUser,
}