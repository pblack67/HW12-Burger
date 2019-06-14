const connection = require("../config/connection.js");

let orm = {
    selectAll: function (queryTable, callback) {
        console.log(queryTable, callback);
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

    updateOne: function (queryTable, column, value, whereColumn, whereValue, callback) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
        let intValue = (value == "true") ? 1 : 0;
        connection.query(queryString, [queryTable, column, intValue, whereColumn, whereValue], (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

};

module.exports = orm;
