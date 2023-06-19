const express = require("express");
const { User } = require("../models/user");
const { Product } = require("../models/product");
const path = require("path");
const fs = require("fs");

const router = express.Router();


router.post("/api/createUser", async (req, res) => {
    const { email, password, firstname, lastname } = req.body;
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.send("Email already in use");
    }
    const user = new User({
      email,
      password,
      firstname,
      lastname,
    });
    await user.save();
    res.send(user);
  });
  
////////// product

 /* router.post("/api/createProduct", async (req, res) => {
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
  });*/
  
  exports.createRouter = router;