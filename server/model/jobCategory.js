const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const jobCategorySchema = new Schema({

});

module.export = mongoose.model("jobcategory", jobCategorySchema);