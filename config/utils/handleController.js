var colors = require('colors');

handle = (response, res) => {

    let responseStatus;
    let responseMessage;

    if (!response.errno) {
        responseStatus = 200;
        responseMessage = { operation: 'Successful appointment consultation', response }
        console.log(colors.green('Successful appointment consultation'));
    } else {
        responseStatus = 400;
        responseMessage = { operation: 'An error occurred querying appointment. ' + response }
        console.log(colors.red('An error occurred querying appointment. ' + response));
    }
    return res.status(responseStatus).json(responseMessage);

}

module.exports = {
    handle
}