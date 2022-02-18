let configMysql = require("./config.mysql.json")

module.exports = {
    getMysqlConnection : function () {
        return configMysql
    }
}