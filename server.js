const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const { mongoose, connectDB } = require("./Middleware/connect");
const userRoutes = require("./Routes/admin");
const categoryRoutes = require('./Routes/category');
const articleRoutes = require('./Routes/article');
const contactRoutes = require('./Routes/contact');





const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

const port = 3000;

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/article", articleRoutes);
app.use("/api/contact", contactRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get('/', (req, res) => {
    res.send('Hello World!');
  });


  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
