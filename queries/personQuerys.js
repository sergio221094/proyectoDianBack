const con = require("../config/database/database");

getAllPersonQuery = async() => {
    const myQuery = "SELECT * FROM `persona`";
    return await con.query(myQuery);
}

savePersonQuery = async(person) => {
    const myQuery = "INSERT INTO `persona` SET ? ";
    return await con.query(myQuery, [person]);
}

deletePersonQuery = async(id) => {
    const myQuery = "DELETE FROM `persona` WHERE `persona`.`id_persona` = ? ";
    return await con.query(myQuery, [id]);
}

getEmailAndPhoneQuery = async() => {
    const myQuery = "SELECT P.email, P.telefono FROM persona P";
    return await con.query(myQuery);
}

updatePersonQuery = async(id, person) => {
    const myQuery = "UPDATE `persona` SET ? WHERE `id_persona` = " + id;
    console.log(myQuery);
    return await con.query(myQuery, [person]);
}



/*

SELECT P.email, P.telefono FROM persona P

SELECT * FROM cita C WHERE C.fecha BETWEEN '2020-01-15' AND '2020-01-15'

SELECT * FROM cita C JOIN persona P WHERE C.fecha BETWEEN '2020-01-15' AND '2020-01-15' AND P.tipo_persona = 'Natural'

SELECT COUNT(*) FROM cita c WHERE c.id_trabajador = 8 (por trabajador)

SELECT COUNT(*) FROM cita C JOIN centro_atencion CA WHERE CA.id_centro_atencion = 1

*/

module.exports = {
    getAllPersonQuery,
    savePersonQuery,
    deletePersonQuery,
    getEmailAndPhoneQuery,
    updatePersonQuery
}