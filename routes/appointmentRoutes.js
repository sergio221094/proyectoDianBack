const router = require("express").Router();
const appointmentCtrl = require("../controllers/appointmentCtrl")

router.get("/", appointmentCtrl.getAllAppointmentCtrl);
router.post("/", appointmentCtrl.saveAppointmentCtrl);
router.post("/getAppoinmentByRangeDates", appointmentCtrl.getAppoinmentByRangeDatesCtrl);

module.exports = router;