const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    Reference: { type: String },
    Designation: { type: String },
    Categorie: { type: Schema.Types.ObjectId, ref: "category" },
    Photo: { type: String },
    description: {type:String}
    
  },
  { timestamps: true }
);

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
