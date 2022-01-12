const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const MovieSchema = new Schema(
    {
        title: String,
        genre: String,
        plot: String,
        cast: [{ type: mongoose.Schema.Types.ObjectId, ref: "celebrities" }],
    }
);

const MovieModel = model("movies", MovieSchema);

module.exports = MovieModel;