const express = require("express");
require('dotenv').config()
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>You are visiting home page</h1>")
})

module.exports =app;