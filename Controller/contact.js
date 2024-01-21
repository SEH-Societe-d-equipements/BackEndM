const express = require('express');
const router = express.Router();
const Contact = require("../Model/contact") 

exports.addContact = async (req, res, next) => {
    try {
        const contactData = req.body;
        const newContact = new Contact(contactData);
        const savedContact = await newContact.save();

        res.status(201).json({
            success: true,
            contact: savedContact,
        });
    } catch (err) {
        next(err);
    }
};

exports.getAllContacts = async (req, res, next) => {
    try {
      const contact = await Contact.find()
      .limit(7)
  
      res.status(200).json({
        success: true,
        contact: contact,
      });
    } catch (err) {
      next(err);
    }
};
