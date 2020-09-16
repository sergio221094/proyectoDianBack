const con = require("../config/database/database");

getAllCenterOfAttentionQuery = async() => {
    const myQuery = "SELECT * FROM `centro_atencion`";
    return await con.query(myQuery);
}

getCenterOfAttentionByIdQuery = async(id) => {
    const myQuery = "SELECT * FROM `centro_atencion` WHERE id_centro_atencion = ?";
    return await con.query(myQuery, [id]);
}

saveCenterOfAttentionQuery = async(centerOfAttention) => {
    const myQuery = "INSERT INTO `centro_atencion` SET ? ";
    return await con.query(myQuery, [centerOfAttention]);
}


module.exports = {
    getAllCenterOfAttentionQuery,
    getCenterOfAttentionByIdQuery,
    saveCenterOfAttentionQuery
}