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

getAppoinmentByEmployeeCtrl = async(req, res) => {
    employeeId = req.headers.id_trabajador;
    let response = await getAppoinmentByEmployeeQuery(employeeId);
    handle(response, res);
}

getAppoinmentByCenterOfAttentionCtrl = async(req, res) => {
    centerOfAttention = req.headers.centro_de_atencion;
    let response = await getAppoinmentByCenterOfAttentionQuery(centerOfAttention);
    handle(response, res);
}
getAppoinmentByRangeDatesAndTypePersonCtrl = async(req, res) => {
    fechaIn = req.body.fechaInicial;
    fechaFn = req.body.fechaFinal;
    typePerson = req.body.tipoPersona;
    let response = await getAppoinmentByRangeDatesAndTypePersonQuery(fechaIn, fechaFn, typePerson);
    handle(response, res);
}

updateAppointmentCtrl = async(req, res) => {
    id = req.headers.id_cita;
    allAppointment = req.body;
    let response = await updateAppointmentQuery(id, allAppointment);
    handle(response, res);
}

deleteAppointmentCtrl = async(req, res) => {
    id = req.headers.id_cita;
    let response = await deleteAppointmentQuery(id);
    handle(response, res);
}

module.exports = {
    getAllAppointmentCtrl,
    saveAppointmentCtrl,
    getAppoinmentByRangeDatesCtrl,
    getAppoinmentByRangeDatesAndTypePersonCtrl,
    updateAppointmentCtrl,
    deleteAppointmentCtrl,
    getAppoinmentByEmployeeCtrl,
    getAppoinmentByCenterOfAttentionCtrl
}