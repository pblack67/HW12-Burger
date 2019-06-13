const express = require("express");
const burger = require("../models/burger");

let router = express.Router();

router.get("/", (request, response) => {
    // Standard index route. Display all burgers devoured and not devoured.
    burger.selectAll(result => {
        response.render("index", { burgers: result });
    });
});

router.get("/api/create", function (request, response) {
    // Create a burger
});

router.get("/api/update/:id", function (request, response) {
    // Update a burger
});

router.get("/api/delete/:id", function (request, response) {
    // Create a burger
});

module.exports = router;