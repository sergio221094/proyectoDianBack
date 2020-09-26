const con = require("../config/database/database");

getAllDocumentTypesQuery = async() => {
    const myQuery = "SELECT * FROM tipo_identificacion";
    return await con.query(myQuery);
}

saveDocumentTypesQuery = async(tipo_identificacion) => {
    const myQuery = "INSERT INTO `tipo_identificacion` SET ?";
    return await con.query(myQuery, [tipo_identificacion]);
}

updateDocumentTypesQuery = async(id, tipo_identificacion) => {
    const myQuery = "UPDATE `tipo_identificacion` SET ? WHERE `id_tipo_identificacion`= " + id;
    return await con.query(myQuery, [tipo_identificacion]);
}

deleteDocumentTypesQuery = async(id) => {
    const myQuery = "DELETE FROM `tipo_identificacion` WHERE `id_tipo_identificacion`= ?";
    return await con.query(myQuery, [id]);
}


module.exports = {
    getAllDocumentTypesQuery,
    saveDocumentTypesQuery,
    updateDocumentTypesQuery,
    deleteDocumentTypesQuery

}