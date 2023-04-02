const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const jobCategorySchema = new Schema({
    category_name:{
        type:String,
        require:true,
    },
    category_logo:{
        type:String,
        require:true,
    },
}, {timestamps:true});

const jobCategoryModel = mongoose.model("jobcategory", jobCategorySchema);

const validateJobCategory = (jobcategory)=>{
    const schema = joi.object({
        category_name : joi.string().required().messages({
            "string.empty": "Category Name is Required",
        }),
        category_logo : joi.string().required().messages({
            "string.empty": "Logo is Required",
        }),
    })
    return schema.validate(jobcategory);
}

module.exports = {
    jobCategoryModel,
    validateJobCategory,
}