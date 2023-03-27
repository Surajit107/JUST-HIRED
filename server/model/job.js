const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const jobSchema = new Schema({
    title: {
        type: String,
        requrie: [true, "Title is required!"],
    },
    company_name: {
        type: String,
        require: [true, "Company name is required!"],
    },
    company_logo: {
        type: String,
        require: [true, "Company logo is required!"],
    },
    short_desp: {
        type: String,
        require: [true, "This field is required!"],
    },
    full_desp: {
        type: Array,
        require: [true, "This field is required!"],
    },
    experience:{
        type: String,
        require: [true, "This field is required!"],
    },
    requirement:{
        type: Array,
        require: [true, "This field is required!"],
    },
    job_nature:{
        type: String,
        require: [true, "This field is required!"],
    },
    salary_range:{
        type:Number,
        require: [true, "This field is required!"],
    },

});

const jobModel = mongoose.model("job", jobSchema);

const validateJobField =(job)=>{
    const schema = joi.object({
        title: joi.string().max(40).required(),
        company_name:joi.string().max(40).required(),
        company_logo:joi.string().required(),
        short_desp:joi.string().required(),
        full_desp:joi.string().required(),
        experience:joi.string().required(),
        requirement:joi.string().required(),
        job_nature:joi.string().required(),
        salary_range:joi.number().required(),
    })
    return schema.validate(job);
}

module.exports = {
    jobModel,
    validateJobField,
}