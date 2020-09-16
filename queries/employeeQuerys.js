const con = require("../config/database/database");

getAllEmployeeQuery = async() => {
    const myQuery = "SELECT * FROM `trabajador`";
    return await con.query(myQuery);
}

getEmployeeByIdCenterQuery = async(id) => {
    const myQuery = "SELECT * FROM `trabajador` WHERE `id_centro_atencion` = ?";
    return await con.query(myQuery, [id]);
}

saveEmployeeQuery = async(trabajador) => {
    const myQuery = "INSERT INTO `trabajador` SET ? ";
    return await con.query(myQuery, [trabajador]);
}

module.exports = {
    getAllEmployeeQuery,
    getEmployeeByIdCenterQuery,
    savePersonQuery
}