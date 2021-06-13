const mongoose = require("mongoose");

Recipe = new mongoose.Schema({
    name : String,
    ingredients : {
        type: [String],
        default: undefined
    },
    duration : Number
});

module.exports = mongoose.model("Recipe", Recipe);