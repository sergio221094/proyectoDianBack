var colors = require('colors');

handle = (response, res) => {

    let responseStatus;
    let responseMessage;

    if (!response.errno) {
        responseStatus = 200;
        responseMessage = { operation: 'Successful consultation', response }
        console.log(colors.green('Successful consultation'));
    } else {
        responseStatus = 400;
        responseMessage = { operation: 'An error occurred querying. ' + response }
        console.log(colors.red('An error occurred querying. ' + response));
    }
    return res.status(responseStatus).json(responseMessage);

}

module.exports = {
    handle
}