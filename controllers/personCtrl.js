const { getAllPersonQuery, savePersonQuery, deletePersonQuery } = require("../queries/personQuerys");
const { handle } = require("../config/utils/handleController");

getAllPersonCtrl = async(req, res) => {
    let response = await getAllPersonQuery();
    handle(response, res);
}

savePersonCtrl = async(req, res) => {
    person = req.body;
    let response = await savePersonQuery(person);
    handle(response, res);
}

deletePersonCtrl = async(req, res) => {
    id = req.headers.id_persona;
    let response = await deletePersonQuery(id);
    handle(response, res);
}

getEmailAndPhoneCtrl = async(req, res) => {
    let response = await getEmailAndPhoneQuery();
    handle(response, res);
}

updatePersonCtrl = async(req, res) => {
    id = req.headers.id_persona;
    person = req.body;
    let response = await updatePersonQuery(id, person);
    handle(response, res);
}

module.exports = {
    getAllPersonCtrl,
    savePersonCtrl,
    deletePersonCtrl,
    getEmailAndPhoneCtrl,
    updatePersonCtrl
}