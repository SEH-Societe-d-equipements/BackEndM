const Article = require('../Model/article')
exports.addArticle = async (req, res, next) => {
  try {
    const {
      Reference,
      Designation,
      Categorie,

    } = req.body;

    
    console.log()

    const newArticle = new Article({
      Reference,
      Designation,
      Categorie,
      Photo: req.file ? req.file.path : undefined,
    });

    const savedArticle = await newArticle.save();


    res.status(200).json({
      success: true,
      article: newArticle
    });
  } catch (err) {
    next(err);
  }
};

exports.updateArticle = async (req, res, next) => {
  try {
    const articleId = req.params.id;
    const updatedData = req.body;

    const updatedArticle = await Article.findByIdAndUpdate(
      articleId,
      updatedData,
      { new: true }
    );

    res.status(200).json({
      success: true,
      article: updatedArticle,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteArticle = async (req, res, next) => {
  try {
    const articleId = req.params.id;

    await Article.findByIdAndDelete(articleId);

    res.status(200).json({
      success: true,
      message: "Article deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllArticles = async (req, res, next) => {
    try {
      let filter = {};
      if (req.query.categoryId) {
        filter.Categorie = req.query.categoryId;
      }
  
      const articles = await Article.find(filter).populate('Categorie');
  
      res.status(200).json({
        success: true,
        articles: articles,
      });
    } catch (err) {
      next(err);
    }
  };

exports.getArticleById = async (req, res, next) => {
  try {
    const articleId = req.params.id;

    const article = await Article.findById(articleId);

    if (!article) {
      return res.status(404).json({
        success: false,
        error_message: "article not found",
      });
    }

    res.status(200).json({
      success: true,
      article: article,
    });
  } catch (err) {
    next(err);
  }
};


