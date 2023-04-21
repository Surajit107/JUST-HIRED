const mongoose = require("mongoose");
const joi = require("joi");

const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    sub_title: {
        type: String,
        require: true,
    },
    post_img: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    flag: {
        type: Boolean,
        default: false,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    jobcategory: {
        type: Schema.Types.ObjectId,
        ref: "jobcategory",
    },
}, { timestamps: true });

const postModel = mongoose.model("post", postSchema);

const validatePosts = (post) => {
    const schema = joi.object({
        title: joi.string().required().messages({
            "string.empty": "Title is Required",
        }),
        sub_title: joi.string().required().messages({
            "string.empty": "Subtitle is Required",
        }),
        post_img: joi.string().messages({
            "string.empty": "Image is Required",
        }),
        content: joi.string().required().messages({
            "string.empty": "Content can't be Empty",
        }),
        user: joi.string().required().messages({
            "string.empty": "User can't be Empty",
        }),
        jobcategory: joi.string().required().messages({
            "string.empty": "jobcategory can't be Empty",
        }),
    })
    return schema.validate(post)
}

module.exports = {
    postModel,
    validatePosts
}