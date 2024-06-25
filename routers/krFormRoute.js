const express = require('express');
const router = express.Router();
const KrFormController  = require("../controllers/krform")

router.post('/addKRForm',KrFormController.createUserData);

router.get("/getUserData",KrFormController.getUserData)

module.exports = router;