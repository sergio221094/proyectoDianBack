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

updateCenterOfAttentionQuery = async(id, centerOfAttention) => {
    const myQuery = "UPDATE `centro_atencion` SET ? WHERE `id_centro_atencion` = " + id;
    return await con.query(myQuery, [centerOfAttention]);
}

deleteCenterOfAttentionByIdQuery = async(id) => {
    const myQuery = "DELETE FROM `centro_atencion` WHERE id_centro_atencion = ?";
    return await con.query(myQuery, [id]);
}

module.exports = {
    getAllCenterOfAttentionQuery,
    getCenterOfAttentionByIdQuery,
    saveCenterOfAttentionQuery,
    updateCenterOfAttentionQuery,
    updateCenterOfAttentionQuery
}