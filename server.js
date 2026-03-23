const express = require ("express");
const bodyParser = require ("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const connectDB = require("./recipeManager/config/dbConfig");
const app = express();
const router = require("./recipeManager/routes/recipeRoutes");

//Middleware
app.use(bodyParser.json());

//DB Connection
connectDB();

//routes
app.use("/api/recipes", router);

//server
app.listen(PORT, ()=>{
    console.log(`Server is running at Port ${PORT}`);
})
