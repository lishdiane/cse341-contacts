const express = require('express');
const router = express.Router();
const controllers = require("../controllers")

router.get('/all', controllers.buildGetAllContactsView);

router.get('/one/:_id', controllers.buildGetOneContactView);

module.exports = router;