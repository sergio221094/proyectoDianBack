const { getAllCenterOfAttentionQuery } = require("../queries/centerOfAttentionQuerys");
const { handle } = require("../config/utils/handleController");

getAllCenterOfAttentionCtrl = async(req, res) => {
    id = req.body.id_centro_atencion;
    let response = await getAllCenterOfAttentionQuery();
    handle(response, res);
}

getCenterOfAttentionByIdCtrl = async(req, res) => {
    id = req.headers.id_centro_atencion;
    let response = await getCenterOfAttentionByIdQuery(id);
    handle(response, res);
}

saveCenterOfAttentionCtrl = async(req, res) => {
    centerOfAttention = req.body;
    let response = await saveCenterOfAttentionQuery(centerOfAttention);
    handle(response, res);
}

updateCenterOfAttentionCtrl = async(req, res) => {
    id = req.headers.id_centro_atencion;
    centerOfAttention = req.body;
    let response = await updateCenterOfAttentionQuery(id, centerOfAttention);
    handle(response, res);
}

deleteCenterOfAttentionByIdCtrl = async(req, res) => {
    id = req.headers.id_centro_atencion;
    let response = await deleteCenterOfAttentionByIdQuery(id);
    handle(response, res);
}

module.exports = {
    getAllCenterOfAttentionCtrl,
    getCenterOfAttentionByIdCtrl,
    saveCenterOfAttentionCtrl,
    updateCenterOfAttentionCtrl,
    deleteCenterOfAttentionByIdCtrl
}