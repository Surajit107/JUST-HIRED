const mongoose = require("mongoose");
const joi = require("joi")

const Schema = mongoose.Schema;
const commentSchema = new Schema({
    post: {
        type: Schema.types.ObjectId,
        ref: "post"
    },
    comment: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    flag: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model("comment", commentSchema)