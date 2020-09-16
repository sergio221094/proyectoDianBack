const router = require("express").Router();
const appointmentCtrl = require("../controllers/appointmentCtrl")

router.get("/", appointmentCtrl.getAllAppointmentCtrl);
router.post("/", appointmentCtrl.saveAppointmentCtrl);

module.exports = router;