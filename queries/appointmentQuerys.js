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

getAppoinmentByEmployeeQuery = async(employeeId) => {
    const myQuery = "SELECT * FROM cita C JOIN trabajador T WHERE C.id_trabajador = T.id_trabajador AND C.id_trabajador = " + employeeId;
    return await con.query(myQuery);
}

getAppoinmentByCenterOfAttentionQuery = async(centerOfAttention) => {
    const myQuery = "SELECT * FROM cita C JOIN trabajador T WHERE C.id_trabajador = T.id_trabajador AND T.id_centro_atencion = " + centerOfAttention;
    console.log("query: " + myQuery);
    return await con.query(myQuery);
}
getAppoinmentByRangeDatesAndTypePersonQuery = async(fechaIn, fechaFn, typePerson) => {
    const myQuery = "SELECT * FROM cita C JOIN persona P WHERE C.fecha BETWEEN '" + fechaIn + "' AND '" + fechaFn + "' AND P.tipo_persona = '" + typePerson + "'";
    return await con.query(myQuery);
}

updateAppointmentQuery = async(id, appointment) => {
    const myQuery = "UPDATE `cita` SET ? WHERE `id_cita` =" + id;
    return await con.query(myQuery, [appointment]);
}

deleteAppointmentQuery = async(id) => {
    const myQuery = "DELETE FROM `cita` WHERE `id_cita` = ? ";
    return await con.query(myQuery, [id]);
}

module.exports = {
    getAllAppointmentQuery,
    saveAppointmentQuery,
    getAppoinmentByRangeDatesQuery,
    getAppoinmentByRangeDatesAndTypePersonQuery,
    updateAppointmentQuery,
    deleteAppointmentQuery,
    getAppoinmentByEmployeeQuery,
    getAppoinmentByCenterOfAttentionQuery

}