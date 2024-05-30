const express = require("express");
const app = express();

app.use(function (request, response, next) {
    console.log("Middleware 1");
    next();
});

app.use(function (request, response, next) {
    console.log("Middleware 2");
    next();
});

app.get("/", function (request, response) {
    console.log("Route /");
    response.send("Hello Oleksandr");
});

module.exports = app;