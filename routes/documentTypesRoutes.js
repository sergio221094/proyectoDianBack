const router = require("express").Router();
const documentTypeCtrl = require("../controllers/documentTypeCtrl")

router.get("/getAllDocumentTypes", documentTypeCtrl.getAllDocumentTypesCtrl);
router.post("/saveDocumentTypes", documentTypeCtrl.saveDocumentTypesCtrl);
router.put("/updateDocumentTypes", documentTypeCtrl.updateDocumentTypesCtrl);
router.delete("/deleteDocumentTypes", documentTypeCtrl.deleteDocumentTypesCtrl);

module.exports = router;