const { getAllCenterOfAttentionQuery } = require("../queries/centerOfAttentionQuerys");
var colors = require('colors');

getAllCenterOfAttentionCtrl = async(req, res) => {

    id = req.body.id_centro_atencion;

    let responseStatus;
    let responseMessage;
    let response = await getAllCenterOfAttentionQuery();

    if (!response.errno) {
        responseStatus = 200;
        responseMessage = { operation: 'Successful center of attention consultation', response }
        console.log(colors.green('Successful center of attention consultation'));
    } else {
        responseStatus = 400;
        responseMessage = { operation: 'An error occurred querying center of attention. ' + response }
        console.log(colors.red('An error occurred querying center of attention. ' + response));
    }
    res.status(responseStatus).json(responseMessage);

}
getCenterOfAttentionByIdCtrl = async(req, res) => {

    id = req.body.id_centro_atencion;

    let responseStatus;
    let responseMessage;
    let response = await getCenterOfAttentionByIdQuery(id);

    if (!response.errno) {
        responseStatus = 200;
        responseMessage = { operation: 'Successful center of attention consultation', response }
        console.log(colors.green('Successful center of attention consultation'));
    } else {
        responseStatus = 400;
        responseMessage = { operation: 'An error occurred querying center of attention. ' + response }
        console.log(colors.red('An error occurred querying center of attention. ' + response));
    }
    res.status(responseStatus).json(responseMessage);

}

saveCenterOfAttentionCtrl = async(req, res) => {

    console.log(req.body);

    let responseStatus;
    let responseMessage;
    let response = await saveCenterOfAttentionQuery(req.body);

    if (!response.errno) {
        responseStatus = 200;
        responseMessage = { operation: 'Successful center of attention consultation', response }
        console.log(colors.green('Successful center of attention consultation'));
    } else {
        responseStatus = 400;
        responseMessage = { operation: 'An error occurred querying center of attention. ' + response }
        console.log(colors.red('An error occurred querying center of attention. ' + response));
    }
    res.status(responseStatus).json(responseMessage);

}


module.exports = {
    getAllCenterOfAttentionCtrl,
    getCenterOfAttentionByIdCtrl,
    saveCenterOfAttentionCtrl
}