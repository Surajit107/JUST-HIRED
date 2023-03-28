const mongoose = require("mongoose");
const joi = require("joi")

const Schema = mongoose.Schema;
const commentSchema = new Schema({
    post:{
        type:Schema.types.ObjectId,
        ref:"post"
    },
    comment:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    flag:{
        type:Boolean,
        default: false
    }
}, {timestamps: true});

const commentModel = mongoose.model("comment", commentSchema);

const validateComments =(comment)=>{
    const schema = joi.object({
        comment:joi.string().required(),
        name:joi.string().required(),
        email:joi.email({ minDomainSegments: 2, tlds: { allow: ['com', 'in'] }})
                .required(),
    })
    return schema.validate(comment)
}

module.exports = {
    commentModel,
    validateComments
}