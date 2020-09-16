const { getAllDocumentTypesQuery } = require("../queries/documentTypesQuerys");
const { handle } = require("../config/utils/handleController");

getAllDocumentTypesCtrl = async(req, res) => {
    let response = await getAllDocumentTypesQuery();
    handle(response, res);
}

module.exports = {
    getAllDocumentTypesCtrl
}