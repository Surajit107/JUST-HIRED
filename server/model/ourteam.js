const mongoose = require("mongoose");
const joi = require("joi")

const Schema = mongoose.Schema;
const teamSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    profile_img: {
        type: String,
        require: true,
    },
    designation: {
        type: String,
        require: true,
    },
    flag:{
        type:Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model("team", teamSchema);