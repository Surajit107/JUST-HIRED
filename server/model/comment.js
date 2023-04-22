const mongoose = require("mongoose");
const joi = require("joi")

const Schema = mongoose.Schema;
const commentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
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
        default: true
    }
}, { timestamps: true });

const commentModel = mongoose.model("comment", commentSchema);

const validateComments = (comment) => {
    const schema = joi.object({
        post: joi.string().messages({
            "string.empty": "Post Id is Required"
        }),
        comment: joi.string().required().messages({
            "string.empty": "Comment is Required"
        }),
        name: joi.string().required().messages({
            "string.empty": "Name is Required"
        }),
        email: joi.string().required().messages({
            "string.empty": "Email is Required"
        }),
    })
    return schema.validate(comment);
}

module.exports = {
    commentModel,
    validateComments,
}