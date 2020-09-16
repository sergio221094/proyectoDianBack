const router = require("express").Router();
const centerOfAttentionCtrl = require("../controllers/centerOfAttentionCtrl")

router.get("/", centerOfAttentionCtrl.getAllCenterOfAttentionCtrl);
router.post("/getCenterOfAttentionById", centerOfAttentionCtrl.getCenterOfAttentionByIdCtrl);
router.post("/saveCenterOfAttention", centerOfAttentionCtrl.saveCenterOfAttentionCtrl);

module.exports = router;