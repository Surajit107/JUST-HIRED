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
        name: joi.string().required(),
        email: joi.email({ minDomainSegments: 2, tlds: { allow: ['com', 'in'] } })
            .required(),
        phone: joi.number().required(),
        subject: joi.string().required(),
        message:joi.string().required(),
    })
    return schema.validate(contact)
}

module.exports = {
    contactModel,
    validateContacts
}