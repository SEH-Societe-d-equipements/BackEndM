const express = require("express");
const router = express.Router();
const contactController = require('../Controller/contact');

router.post('/contacts', contactController.addContact);
router.get('/contacts', contactController.getAllContacts);

module.exports = router;

