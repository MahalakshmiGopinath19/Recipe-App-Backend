const mongoose = require("mongoose");

//Schema creation
const recipeSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    recipe : {
        type : String,
        required : true,
    },
    ingredients : {
        type : [String],
        required : true
    },
    cookingTime : {
        type : String,
        required : true
    },
    completion : {
        type : Boolean,
        default : false
    }
});

//Model Creation
const recipeModel = mongoose.model("recipeModel", recipeSchema);
module.exports = recipeModel;