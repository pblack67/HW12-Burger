const express = require("express");
const burger = require("../models/burger");

let router = express.Router();

router.get("/", function (request, response) {
    // cat.all(function (data) {
    //     var hbsObject = {
    //         cats: data
    //     };
    //     console.log(hbsObject);
    response.render("index");
});

module.exports = router;