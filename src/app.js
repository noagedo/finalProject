const express = require("express");
const path = require("path");
const multer = require("multer");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const { createRouter } = require("./routes/create");
app.use(createRouter);
app.use(express.static('../views/app'));

const Product = require("./models/product");

//create button for manger
const upload = multer({ dest: "public/img" });

app.post("/api/upload", upload.single("file"), (req, res) => {
  // starting to upload only to rings
  const targetHtmlPath = path.join(__dirname, "public", "rings.html");
  res.sendFile(targetHtmlPath);
});
app.use(upload.single("file"));
app.use(createRouter);
app.post("/api/upload", (req, res) => {
  // File upload is complete, send the file name back to the client
  res.json({ fileName: req.file.filename });
});

app.post("/api/createProduct", async (req, res) => {
  const { image,title,price } = req.body;
  const isExist = await Product.findOne({ title });
  if (isExist) {
    return res.send("Title already in use");
  }
  const product = new Product({
   image,
   title,
   price,
  });
  await product.save();
  res.send(product);
});

app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname,"./views/app.html"));
})

app.get("/register",(req, res)=>{
  res.sendFile(path.join(__dirname,"./views/signup.html"));
})
app.get("/login",(req, res)=>{
  res.sendFile(path.join(__dirname,"./views/login.html"));
})
app.get("/signup",(req, res)=>{
  res.sendFile(path.join(__dirname,"./views/signup.html"));
})
app.get("/contact",(req, res)=>{
  res.sendFile(path.join(__dirname,"./views/contact.html"));
})
app.get("/Rings",(req, res)=>{
  res.sendFile(path.join(__dirname,"./views/rings.html"));
})
app.get("/Necklaces",(req, res)=>{
  res.sendFile(path.join(__dirname,"./views/necklaces.html"));
})
app.get("/Bracelets",(req, res)=>{
  res.sendFile(path.join(__dirname,"./views/bracelets.html"));
})
app.get("/Admin",(req, res)=>{
  res.sendFile(path.join(__dirname,"./views/admin.html"));
})

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const start = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/products");

  app.listen(3300, () => {
    console.log("Servers up");
  });
};
start();