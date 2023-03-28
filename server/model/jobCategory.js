const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const jobCategorySchema = new Schema({
    category_name:{
        types:String,
        require:true,
    },
    category_logo:{
        types:String,
        require:true,
    },
}, {timestamps:true});

module.export = mongoose.model("jobcategory", jobCategorySchema);