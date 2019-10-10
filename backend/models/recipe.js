const mongoose = require('mongoose');

// creating a data schema
const recipeSchema = mongoose.Schema({
    title: { type: String, required: true},
    ingredients: { type: String, required: true},
    instructions: { type: String, required: true},
    time: { type: Number, required: true},
    difficulty: { type: Number, required: true},
});

// exporting that schema as a Mongoose model, making it available for our Express app
module.exports = mongoose.model('Recipe', recipeSchema);
