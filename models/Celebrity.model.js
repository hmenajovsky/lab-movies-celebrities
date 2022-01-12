const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
//const Model = mongoose.model;
const { model, Schema } = mongoose;

const celebritySchema = new Schema(
    {
        name: String,
        occupation: String,
        catchPhrase: String
    }
);

const CelebrityModel = model("celebrities", celebritySchema);

module.exports = CelebrityModel;