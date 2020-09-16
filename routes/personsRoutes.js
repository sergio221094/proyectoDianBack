const router = require("express").Router();
const personCtrl = require("../controllers/personCtrl")

router.get("/", personCtrl.getAllPersonCtrl);
router.post("/", personCtrl.savePersonCtrl);
router.delete("/", personCtrl.deletePersonCtrl);

module.exports = router;