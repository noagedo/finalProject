const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const { createRouter } = require("./routes/create");
const { signinRouter } = require("./routes/signin");


const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.use(createRouter);
app.use(signinRouter);


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

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



const start = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/products");

  app.listen(4000, () => {
    console.log("Servers up");
  });
};
start();