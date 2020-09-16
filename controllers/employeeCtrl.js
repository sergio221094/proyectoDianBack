const { getAllEmployeeQuery, getNameCenterByEmployeeQuery } = require("../queries/employeeQuerys");
const { handle } = require("../config/utils/handleController");

getAllEmployeeCtrl = async(req, res) => {
    let response = await getAllEmployeeQuery();
    handle(response, res);
}

getEmployeeByIdCenterCtrl = async(req, res) => {
    id = req.body.id_centro_atencion;
    let response = await getEmployeeByIdCenterQuery(id);
    handle(response, res);
}

saveEmployeeCtrl = async(req, res) => {
    employer = req.body;
    let response = await saveEmployeeQuery(employer);
    handle(response, res);
}

module.exports = {
    getAllEmployeeCtrl,
    getEmployeeByIdCenterCtrl,
    saveEmployeeCtrl
}