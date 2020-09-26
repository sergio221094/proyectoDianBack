const { getAllDocumentTypesQuery } = require("../queries/documentTypesQuerys");
const { handle } = require("../config/utils/handleController");

getAllDocumentTypesCtrl = async(req, res) => {
    let response = await getAllDocumentTypesQuery();
    handle(response, res);
}

saveDocumentTypesCtrl = async(req, res) => {
    centerOfAttention = req.body;
    let response = await saveDocumentTypesQuery(centerOfAttention);
    handle(response, res);
}

updateDocumentTypesCtrl = async(req, res) => {
    id = req.headers.id_tipo_identificacion;
    centerOfAttention = req.body;
    let response = await updateDocumentTypesQuery(id, centerOfAttention);
    handle(response, res);
}

deleteDocumentTypesCtrl = async(req, res) => {
    id = req.headers.id_tipo_identificacion;
    let response = await deleteDocumentTypesQuery(id);
    handle(response, res);
}

module.exports = {
    getAllDocumentTypesCtrl,
    saveDocumentTypesCtrl,
    updateDocumentTypesCtrl,
    deleteDocumentTypesCtrl
}