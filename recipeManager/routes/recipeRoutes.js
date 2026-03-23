const express = require("express");
const {getAllRecipes,getRecipeById,
        createNewRecipe,updateRecipe,deleteRecipe} = require("../controllers/recipeController");
const router = express.Router();

//routing
router.get("/", getAllRecipes);
router.get("/:id", getRecipeById);
router.post("/", createNewRecipe);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

module.exports = router;