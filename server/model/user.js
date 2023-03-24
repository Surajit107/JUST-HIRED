const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({

});

module.export = mongoose.model("user", userSchema);