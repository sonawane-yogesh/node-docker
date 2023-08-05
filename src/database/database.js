const database = require('ronin-database');
let connString = process.env.CONNECTION_STRING;

module.exports.Database = function () {
    getDb = async function () {
        return await database.connect(connString);
    }
}
