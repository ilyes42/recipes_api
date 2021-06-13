const express = require("express");
const Recipe = require('./Models/Recipe');

const app = express();
app.use(express.json());

app.get("/api/recipes", (req, res) => {
    Recipe.find()
        .then(recipes => res.status(200).send(recipes))
        .catch(err => res.status(400).send(err));
});

app.post("/api/recipes", (req, res) => {
    const body = req.body;
    const recipe = new Recipe();
    
    recipe.name = body.name;
    recipe.duration = body.duration;
    recipe.ingredients = body.ingredients;

    recipe.save()
        .then(recipe => res.status(201).send(recipe))
        .catch(err => res.status(400).send(err));
})

module.exports = app;