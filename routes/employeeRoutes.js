const router = require("express").Router();
const employeeCtrl = require("../controllers/employeeCtrl")

router.get("/", employeeCtrl.getAllEmployeeCtrl);
router.post("/getEmployeeByIdCenter", employeeCtrl.getEmployeeByIdCenterCtrl);
router.post("/saveEmployee", employeeCtrl.saveEmployeeCtrl);

module.exports = router;