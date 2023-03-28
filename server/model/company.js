const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const companySchema = new Schema({
    company_name:{
        type:String,
        require:true
    },
    company_logo:{
        type:String,
        require:true
    },
    company_url:{
        type:String,
        require:true
    },
    company_loc:{
        type:String,
        require:true
    },
    flag:{
        type:Boolean,
        default: false,
    },
    
});

module.export = mongoose.model("company", companySchema);