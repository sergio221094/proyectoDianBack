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

updateEmployeeQuery = async(id, trabajador) => {
    const myQuery = "UPDATE `trabajador` SET ? WHERE `id_trabajador`= " + id;
    return await con.query(myQuery, [trabajador]);
}

deleteEmployeeQuery = async(id) => {
    const myQuery = "DELETE FROM `trabajador` WHERE `id_trabajador`= ?";
    return await con.query(myQuery, [id]);
}


module.exports = {
    getAllEmployeeQuery,
    getEmployeeByIdCenterQuery,
    savePersonQuery,
    updateEmployeeQuery,
    deleteEmployeeQuery

}