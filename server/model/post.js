const mongoose = require("mongoose");
const joi = require("joi");

const Schema = mongoose.Schema;
const postSchema = new Schema({
    title:{
        type:String,
        require: [true, "Title is required!"],
    },
    sub_title:{
        type:String,
        require: [true, "Sub-title is required!"],
    },
    post_img:{
        type:String,
        require: [true, "Image is required!"],
    },
    flag:{
        type:Boolean,
        default: false,
    },
    user:{
        type:Schema.types.ObjectId,
        ref:"user"
    },
    category_id:{
        type:Schema.types.ObjectId,
        ref:"jobcategory",
    },
}, {timestamps: true});

const postModel = mongoose.model("post", postSchema);

const validatePosts = (post)=>{
    const schema = joi.object({
        title:joi.string().required(),
        sub_title:joi.string().required(),
        post_img:joi.string().required(),
    })
    return schema.validate(post)
}

module.exports ={
    postModel,
    validatePosts
}