const router = require("express").Router();
const personCtrl = require("../controllers/personCtrl")

router.get("/getAllPerson", personCtrl.getAllPersonCtrl);
router.get("/getEmailAndPhone", personCtrl.getEmailAndPhoneCtrl);
router.post("/savePerson", personCtrl.savePersonCtrl);
router.put("/updatePerson", personCtrl.updatePersonCtrl);
router.delete("/deletePerson", personCtrl.deletePersonCtrl);

module.exports = router;