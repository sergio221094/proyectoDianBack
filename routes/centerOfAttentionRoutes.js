const router = require("express").Router();
const centerOfAttentionCtrl = require("../controllers/centerOfAttentionCtrl")

router.get("/getAllCenterOfAttention", centerOfAttentionCtrl.getAllCenterOfAttentionCtrl);
router.post("/getCenterOfAttentionById", centerOfAttentionCtrl.getCenterOfAttentionByIdCtrl);
router.post("/saveCenterOfAttention", centerOfAttentionCtrl.saveCenterOfAttentionCtrl);
router.put("/updateCenterOfAttention", centerOfAttentionCtrl.updateCenterOfAttentionCtrl);
router.delete("/deleteCenterOfAttentionById", centerOfAttentionCtrl.deleteCenterOfAttentionByIdCtrl);

module.exports = router;