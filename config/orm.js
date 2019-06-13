let connection = require("../config/connection.js");

let orm = {
    selectAll: function (queryTable, callback) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [queryTable], (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    insertOne: function (queryTable, column1, column2, value1, value2, callback) {
        let queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?);";
        connection.query(queryString, [queryTable, column1, column2, value1, value2], (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    updateOne: function (queryTable, column1, column2, value1, value2, whereColumn, whereValue, callback) {
        let queryString = "UPDATE ?? SET ?? = ?, ?? = ? WHERE ?? = ?;";
        console.log(callback);
        connection.query(queryString, [queryTable, column1, value1, column2, value2, whereColumn, whereValue], (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

};

module.exports = orm;

// orm.selectAll("burgers", result => {
//     console.table(result);
// })

// orm.insertOne("burgers", "burger_name", "devoured", "Onion Deluxe", 0, result => {
//     console.log(result);
// });

// orm.updateOne("burgers", "burger_name", "devoured", "Yummy Bear Meat", 0, "id", 6, result => {
//     console.log(result);
// });