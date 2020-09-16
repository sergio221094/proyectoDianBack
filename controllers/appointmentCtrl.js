const { getAllAppointmentQuery, saveAppointmentQuery } = require("../queries/appointmentQuerys");
const { handle } = require("../config/utils/handleController")

getAllAppointmentCtrl = async(req, res) => {
    let response = await getAllAppointmentQuery();
    handle(response, res);
}


saveAppointmentCtrl = async(req, res) => {
    allAppointment = req.body;
    let response = await saveAppointmentQuery(allAppointment);
    handle(response, res);
}

getAppoinmentByRangeDatesCtrl = async(req, res) => {
    fechaIn = req.body.fechaInicial;
    fechaFn = req.body.fechaFinal;
    let response = await getAppoinmentByRangeDatesQuery(fechaIn, fechaFn);
    handle(response, res);
}

module.exports = {
    getAllAppointmentCtrl,
    saveAppointmentCtrl,
    getAppoinmentByRangeDatesCtrl
}