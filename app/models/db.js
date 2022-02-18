const mysql = require('mysql')
const config = require('../config/database')

let connection = mysql.createPool(config.getMysqlConnection())
connection.getConnection((error, connection) => {
    if (error) {
        console.log(`Error in DB connection: ${error}`)
    } else {
        console.log(`Mysql connection successfully as id: ${connection.threadId}`)
    }
})

module.exports = connection