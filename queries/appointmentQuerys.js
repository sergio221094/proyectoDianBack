const con = require("../config/database/database");

getAllAppointmentQuery = async() => {
    const myQuery = "SELECT * FROM `cita`";
    return await con.query(myQuery);
}

saveAppointmentQuery = async(appointment) => {
    const myQuery = "INSERT INTO `cita` SET ? ";
    return await con.query(myQuery, [appointment]);
}

getAppoinmentByRangeDatesQuery = async(fechaIn, fechaFn) => {
    const myQuery = "SELECT * FROM cita C WHERE C.fecha BETWEEN '" + fechaIn + "' AND '" + fechaFn + "'";
    return await con.query(myQuery);
}


module.exports = {
    getAllAppointmentQuery,
    saveAppointmentQuery,
    getAppoinmentByRangeDatesQuery
}