const express = require("express");
const burger = require("../models/burger");

let router = express.Router();

router.get("/", (request, response) => {
    // Standard index route. Display all burgers devoured and not devoured.
    burger.selectAll(result => {
        response.render("index", { burgers: result });
    });
});

router.post("/api/burger", (request, response) => {
    // Add a burger
    burger.create(request.body.burgerName, false, (result) => {
        response.end();
    });
});

router.put("/api/burger/:id", (request, response) => {
    // Update a burger
    burger.update(request.body.eatme, request.params.id, (result) => {
        response.end();
    });
});

module.exports = router;