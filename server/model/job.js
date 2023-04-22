const mongoose = require("mongoose");
const joi = require("joi");

const Schema = mongoose.Schema;
const jobSchema = new Schema({
    title: {
        type: String,
        requrie: true,
    },
    company_name: {
        type: String,
        require: true,
    },
    company_logo: {
        type: String,
        require: true,
    },
    short_desp: {
        type: String,
        require: true,
    },
    full_desp: {
        type: [String],
        require: true,
        default:[],
    },
    experience: {
        type: String,
        require: true,
    },
    requirement: {
        type: [String],
        require: true,
        default:[],
    },
    job_nature: {
        type: String,
        require: true,
    },
    salary_range: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    jobcategory: {
        type: Schema.Types.ObjectId,
        ref: "jobcategory",
    }
}, { timestamps: true });

const jobModel = mongoose.model("job", jobSchema);

const validateJobField = (job) => {
    const schema = joi.object({
        title: joi.string().max(40).required().messages({
            "string.empty": "Title is Required"
        }),
        company_name: joi.string().max(40).required().messages({
            "string.empty": "Company Name is Required"
        }),
        company_logo: joi.string().messages({
            "string.empty": "Company Logo is Required"
        }),
        short_desp: joi.string().required().messages({
            "string.empty": "Short Description is Required"
        }),
        full_desp: joi.array().items(joi.string()).min(1).required().messages({
            "array.empty": "Full Description is Required"
        }),
        experience: joi.string().required().messages({
            "string.empty": "Choose An Experience Level"
        }),
        requirement: joi.array().required().messages({
            "string.empty": "Requirement is Required"
        }),
        job_nature: joi.string().required().messages({
            "string.empty": "Select One Job Nature"
        }),
        salary_range: joi.string().required().messages({
            "string.empty": "Mention Salary Range"
        }),
        location: joi.string().required().messages({
            "string.empty": "Location is Required"
        }),
        jobcategory: joi.string().messages({
            "string.empty": "jobcategory is Required"
        }),
    })
    return schema.validate(job);
}

module.exports = {
    jobModel,
    validateJobField,
}