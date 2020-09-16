const con = require("../config/database/database");

getAllAppointmentQuery = async() => {
    const myQuery = "SELECT * FROM `cita`";
    return await con.query(myQuery);
}

saveAppointmentQuery = async(appointment) => {
    const myQuery = "INSERT INTO `cita` SET ? ";
    return await con.query(myQuery, [appointment]);
}


module.exports = {
    getAllAppointmentQuery,
    saveAppointmentQuery
}