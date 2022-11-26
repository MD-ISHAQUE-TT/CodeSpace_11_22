const express = require("express");
const app = express();

app.get("/home", (req, res) => {
    res.send("<h1>You are visiting home page</h1>")
})

module.exports =app;

