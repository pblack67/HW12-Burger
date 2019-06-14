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

    update: function (devoured, id, callback) {
        orm.updateOne("burgers", "devoured", devoured, "id", id, result => {
            callback(result);
        });
    }

};

module.exports = burger;
