let Database = require("../database/database");
module.exports.UserMaster = function () {
    this.allUsers = async function () {
        let instance = new Database();
        let db = await instance.getDb();
        let users = await db.getCollection("userMaster").find({});
        return users;
    }
}
