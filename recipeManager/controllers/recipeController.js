const recipeModel = require("../models/recipeModel");

//getAllRecipes --> GET method
const getAllRecipes = async(req,res)=>{
    try{
        const getRecipes = await recipeModel.find();
        res.json(getRecipes);
    }
    catch(error){
        res.status(500).json({error : "Internal Server Error!"});
    }
}

//getRecipeById --> GET method using ID
const getRecipeById = async(req,res)=>{
    try{
        const getRecipesById = await recipeModel.findOne({id: Number(req.params.id)});
        if(!getRecipesById){
            return res.status(404).json({error: "Recipe not found"});
        }
        res.json(getRecipesById);
    }
    catch(error){
        res.status(500).json({error : "Internal Server Error!"});
    }
}

//createNewRecipe --> POST method
const createNewRecipe = async(req,res)=>{
    try{
        const createRecipes = await recipeModel.insertMany(req.body, {ordered: false});
        res.status(201).json(createRecipes);
    }
    catch(error){
        console.error(error); 
        res.status(500).json({error : "Internal Server Error!"});
    }
}

//updateRecipe --> PUT method
const updateRecipe = async(req,res)=>{
    try{
        const updateCurrentRecipe = await recipeModel.findOneAndUpdate({id: Number(req.params.id)},req.body,{new : true});
        if (!updateCurrentRecipe){
            return res.status(404).json({error : "Recipe Not Found"});
        }
        res.json(updateCurrentRecipe);
    }
    catch(error){
        res.status(500).json({error : "Internal Server Error!"});
    }
}

//deleteRecipe --> DELETE method
const deleteRecipe = async(req,res)=>{
    try{
        const deleteRecipeById = await recipeModel.findOneAndDelete({id: Number(req.params.id)});
        if(!deleteRecipeById){
            return res.status(404).json({error : " Recipe Not Found"});
        }
        res.json({message : "Deleted Successfully!!"});
    }
    catch(error){
        res.status(500).json({error : "Internal Server Error!"});
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    createNewRecipe,
    updateRecipe,
    deleteRecipe
};