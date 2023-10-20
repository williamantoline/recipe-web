const db = require("../model");

class RecipeResource {
    constructor(recipe, recipe_steps) {
        this.id = recipe.id;
        this.user_id = recipe.user_id;
        this.title = recipe.title;
        this.description = recipe.description;
        this.created_at = recipe.created_at;
        this.recipe_steps = recipe_steps;
    };
}

module.exports = RecipeResource;