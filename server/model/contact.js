const mongoose = require("mongoose");
const joi = require("joi")

const Schema = mongoose.Schema;
const contactSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    subject: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    }
}, { timestamps: true });

const contactModel = mongoose.model("contact", contactSchema);

const validateContacts = (contact) => {
    const schema = joi.object({
        name: joi.string().required().messages({
            "string.empty": "Name is Required!!!",
        }),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'in'] } }).required().messages({
            "string.empty": "Email is Required!!!",
            "string.email": "Invalid Email Format!!!",
        }),
        phone: joi.string().min(10).max(10).required().messages({
            "string.empty": "Phone is Required!!!",
            "string.min": "Phone should be of 10 Digits!!!",
            "string.max": "Phone should be of 10 Digits!!!",
        }),
        subject: joi.string().required().messages({
            "string.empty": "Subject Can not be Empty!!!",
        }),
        message:joi.string().required().messages({
            "string.empty": "Message Can not be Empty!!!",
        }),
    })
    return schema.validate(contact)
}

module.exports = {
    contactModel,
    validateContacts
}