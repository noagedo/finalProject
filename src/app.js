const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const { createRouter } = require("./routes/create");
app.use(createRouter);

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

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const start = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/products");

  app.listen(4000, () => {
    console.log("Servers up");
  });
};
start();