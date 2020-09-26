const router = require("express").Router();
const appointmentCtrl = require("../controllers/appointmentCtrl")

router.get("/getAllAppointment", appointmentCtrl.getAllAppointmentCtrl);
router.get("/getAppoinmentByEmployee", appointmentCtrl.getAppoinmentByEmployeeCtrl);
router.get("/getAppoinmentByCenterOfAttention", appointmentCtrl.getAppoinmentByCenterOfAttentionCtrl);
router.post("/saveAppointment", appointmentCtrl.saveAppointmentCtrl);
router.post("/getAppoinmentByRangeDates", appointmentCtrl.getAppoinmentByRangeDatesCtrl);
router.post("/getAppoinmentByRangeDatesAndTypePerson", appointmentCtrl.getAppoinmentByRangeDatesAndTypePersonCtrl);
router.put("/updateAppointment", appointmentCtrl.updateAppointmentCtrl);
router.delete("/deleteAppointment", appointmentCtrl.deleteAppointmentCtrl);

module.exports = router;