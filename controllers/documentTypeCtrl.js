const { getAllDocumentTypesQuery } = require("../queries/documentTypesQuerys");
var colors = require('colors');

getAllDocumentTypesCtrl = async(req, res) => {
    let responseStatus;
    let responseMessage;
    let response = await getAllDocumentTypesQuery();

    if (!response.errno) {
        responseStatus = 200;
        responseMessage = { operation: 'Successful document types consultation', response }
        console.log(colors.green('Successful document types consultation'));
    } else {
        responseStatus = 400;
        responseMessage = { operation: 'Successful document types consultation', response }
        console.log(colors.green('Successful document types consultation'));
    }
    res.status(responseStatus).json(responseMessage);

}

module.exports = {
    getAllDocumentTypesCtrl
}