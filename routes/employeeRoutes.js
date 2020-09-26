const router = require("express").Router();
const employeeCtrl = require("../controllers/employeeCtrl")

router.get("/getAllEmployee", employeeCtrl.getAllEmployeeCtrl);
router.post("/getEmployeeByIdCenter", employeeCtrl.getEmployeeByIdCenterCtrl);
router.post("/saveEmployee", employeeCtrl.saveEmployeeCtrl);
router.put("/updateEmployee", employeeCtrl.updateEmployeeCtrl);
router.delete("/deleteEmployee", employeeCtrl.deleteEmployeeCtrl);

module.exports = router;