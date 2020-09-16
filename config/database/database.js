const mysql = require("mysql");
const keys = require("./keys");
const { promisify } = require('util');
var colors = require('colors');

const con = mysql.createPool(keys);
con.getConnection(async(err, connection) => {
    if (err) {
        console.log(err);
        if (err.code == 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED'.red);
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS'.red);
        }
        if (err.code === 'ECONNREFUSSED') {
            console.error('DATABASE CONNECTION WAS REFUSED'.red);
        }
    } else {
        connection.query = promisify(connection.query);
        if (connection) connection.release();
        console.log('DB ID CONNECTED'.green);
        return;
    }
});

con.query = promisify(con.query);

module.exports = con;