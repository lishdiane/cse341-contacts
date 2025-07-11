const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Get all contact route
router.get("/contacts", controllers.buildGetAllContactsView);

// Get contact by id route
router.get("/contacts/:_id", controllers.buildGetOneContactView);

// Create a new contact route
router.post("/contacts", controllers.buildAddContactView);

// Edit contact route
router.put("/contacts/:_id", controllers.buildEditContactView);

// Delete contact route
router.delete("/contacts/:_id", controllers.buildDeleteContactView);


module.exports = router;
