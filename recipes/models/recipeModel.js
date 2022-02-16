const mongoose = require ("mongoose");

const recipeSchema =mongoose.Schema({ //define the model of each recipe
    name : {type: String, require},
    image : {type: String, require},
    ingredients : {type: String, require}
}, {
    timestamps:true,
})

const recipeModel = mongoose.model ('recipes' , recipeSchema)
module.exports = recipeModel //exports the model