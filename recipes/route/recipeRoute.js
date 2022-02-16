const express = require("express");
const router = express.Router();
const Recipe = require('../models/recipeModel')

router.get("/getallrecipes", async(req, res) => {
  
    try {
        const recipes = await Recipe.find({})
        res.send(recipes)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

module.exports = router;