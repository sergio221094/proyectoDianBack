const con = require("../config/database/database");

getAllDocumentTypesQuery = async() => {
    const myQuery = "SELECT * FROM tipo_identificacion";
    return await con.query(myQuery);
}


module.exports = {
    getAllDocumentTypesQuery
}