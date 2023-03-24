const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const utilitySchema = new Schema({
    logo:{
        type: String,
        require: true
    },
    banner:[
        {
            page_name:{
                type: String,
                require: true
            }
        }
    ]
});

module.export = mongoose.model("utility", utilitySchema);