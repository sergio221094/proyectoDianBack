const { getAllEmployeeQuery, getNameCenterByEmployeeQuery } = require("../queries/employeeQuerys");
var colors = require('colors');

getAllEmployeeCtrl = async(req, res) => {
    let responseStatus;
    let responseMessage;
    let response = await getAllEmployeeQuery();

    if (!response.errno) {
        responseStatus = 200;
        responseMessage = { operation: 'Successful employee consultation', response }
        console.log(colors.green('Successful employee consultation'));
    } else {
        responseStatus = 400;
        responseMessage = { operation: 'An error occurred querying employee. ' + response }
        console.log(colors.red('An error occurred querying employee. ' + response));
    }
    res.status(responseStatus).json(responseMessage);

}

getEmployeeByIdCenterCtrl = async(req, res) => {

    id = req.body.id_centro_atencion;
    console.log(req.body);

    let responseStatus;
    let responseMessage;
    let response = await getEmployeeByIdCenterQuery(id);

    if (!response.errno) {
        responseStatus = 200;
        responseMessage = { operation: 'Successful employee consultation', response }
        console.log(colors.green('Successful employee consultation'));
    } else {
        responseStatus = 400;
        responseMessage = { operation: 'An error occurred querying employee. ' + response }
        console.log(colors.red('An error occurred querying employee. ' + response));
    }
    res.status(responseStatus).json(responseMessage);

}

saveEmployeeCtrl = async(req, res) => {

    let responseStatus;
    let responseMessage;
    let response = await saveEmployeeQuery(req.body);

    if (!response.errno) {
        responseStatus = 200;
        responseMessage = { operation: 'Successful employee consultation', response }
        console.log(colors.green('Successful employee consultation'));
    } else {
        responseStatus = 400;
        responseMessage = { operation: 'An error occurred querying employee. ' + response }
        console.log(colors.red('An error occurred querying employee. ' + response));
    }
    res.status(responseStatus).json(responseMessage);

}

module.exports = {
    getAllEmployeeCtrl,
    getEmployeeByIdCenterCtrl,
    saveEmployeeCtrl
}