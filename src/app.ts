// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("../db");
import {Express, IRouter} from "express"
// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app:Express = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("../config")(app);

// 👇 Start handling routes here
const apiRoutes = require("../routes/index.routes.js");
app.use("/api", apiRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("../error-handling")(app);

export default app