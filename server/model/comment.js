const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const commentSchema = new Schema({

});

module.export = mongoose.model("comment", commentSchema);