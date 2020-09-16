const router = require("express").Router();
const documentTypeCtrl = require("../controllers/documentTypeCtrl")

router.get("/", documentTypeCtrl.getAllDocumentTypesCtrl);

module.exports = router;