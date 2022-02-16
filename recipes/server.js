const express = require("express");
const app = express();
const db = require("./db")
const port = process.env.PORT || 8000;
const Recipe = require('./models/recipeModel')
const recipeRoute = require('./route/recipeRoute')


app.use(express.json());
app.use('/api/recipes', recipeRoute)
app.listen(port, () => `Server running on port port 8000`)