const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    name: { type: String }, 
    email: { type: String },
    message: { type: String }, 
    phone: { type: String },
  },
  { timestamps: true }
);

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
