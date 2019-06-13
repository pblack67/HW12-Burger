const orm = require("../config/orm.js");

let burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", result => {
            callback(result);
        });
    },

    create: function (burgerName, devoured, callback) {
        orm.insertOne("burgers", "burger_name", "devoured", burgerName, devoured, result => {
            callback(result);
        });
    },

    update: function (burgerName, devoured, id, callback) {
        orm.updateOne("burgers", "burger_name", "devoured", burgerName, devoured, "id", id, result => {
            callback(result);
        });
    }

};

module.exports = burger;

// burger.selectAll(result => {
//     console.table(result);
// });

// burger.create("Chocolate Deluxe", 0, result => {
//     console.log(result);
// });

// burger.update("Yummy Caribou Meat", 1, 9, result => {
//     console.log(result);
// });