const { getAllPersonQuery, savePersonQuery, deletePersonQuery } = require("../queries/personQuerys");
var colors = require('colors');

getAllPersonCtrl = async(req, res) => {
    let responseStatus;
    let responseMessage;
    let response = await getAllPersonQuery();

    if (!response.errno) {
        responseStatus = 200;
        responseMessage = { operation: 'Successful persons consultation', response }
        console.log(colors.green('Successful persons consultation'));
    } else {
        responseStatus = 400;
        responseMessage = { operation: 'An error occurred querying persons. ' + response }
        console.log(colors.red('An error occurred querying persons. ' + response));
    }
    res.status(responseStatus).json(responseMessage);
}

savePersonCtrl = async(req, res) => {

    person = req.body;

    let responseStatus;
    let responseMessage;
    let response = await savePersonQuery(person);

    if (!response.errno) {
        responseStatus = 200;
        responseMessage = { operation: 'Successful persons consultation', response }
        console.log(colors.green('Successful persons consultation'));
    } else {
        responseStatus = 400;
        responseMessage = { operation: 'An error occurred querying persons. ' + response }
        console.log(colors.red('An error occurred querying persons. ' + response));
    }
    res.status(responseStatus).json(responseMessage);

}

deletePersonCtrl = async(req, res) => {

    id = req.headers.id_persona;

    let responseStatus;
    let responseMessage;
    let response = await deletePersonQuery(id);

    if (!response.errno) {
        responseStatus = 200;
        responseMessage = { operation: 'Successful persons consultation', response }
        console.log(colors.green('Successful persons consultation'));
    } else {
        responseStatus = 400;
        responseMessage = { operation: 'An error occurred querying persons. ' + response }
        console.log(colors.red('An error occurred querying persons. ' + response));
    }

    res.status(responseStatus).json(responseMessage);

}

module.exports = {
    getAllPersonCtrl,
    savePersonCtrl,
    deletePersonCtrl
}