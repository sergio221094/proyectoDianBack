const { getAllAppointmentQuery, saveAppointmentQuery } = require("../queries/appointmentQuerys");
var colors = require('colors');
const { handle } = require("../config/utils/handleController")

getAllAppointmentCtrl = async(req, res) => {

    let responseStatus;
    let responseMessage;
    let response = await getAllAppointmentQuery();

    if (!response.errno) {
        responseStatus = 200;
        responseMessage = { operation: 'Successful appointment consultation', response }
        console.log(colors.green('Successful appointment consultation'));
    } else {
        responseStatus = 400;
        responseMessage = { operation: 'An error occurred querying appointment. ' + response }
        console.log(colors.red('An error occurred querying appointment. ' + response));
    }
    res.status(responseStatus).json(responseMessage);

}


saveAppointmentCtrl = async(req, res) => {

    allAppointment = req.body;

    let response = await saveAppointmentQuery(allAppointment);

    handle(response, res);

}




module.exports = {
    getAllAppointmentCtrl,
    saveAppointmentCtrl
}