const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./models/product");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.vc6edgd.mongodb.net/CosmeticStoreDatabase?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// route to home page public/index.js
app.get("/get_product_data", async (req, res) => {
  // get data from database
  let response = await Product.find({});
  console.log(response);
  // send back to front end
  res.json(response);
});

app.get("/get_specific_product/:product_id", async (req, res) => {
  console.log("get specific product route");
  let id = req.params.product_id;
  let response = await Product.findById(id);
  console.log(response);
  console.log(id);
  // send to front end
  res.json(response);
});

// route to add new product
app.post("/new_product", async (req, res) => {
  //   let name = req.body.nameString;
  //   let image = req.body.urlString;
  //   let description = req.body.descriptionString;
  //   let price = req.body.priceString;
  //   let inventoryValue = req.body.inventoryNumber;
  const {
    nameString: name,
    urlString: image,
    descriptionString: description,
    priceString: price,
    inventoryNumber: inventoryValue,
  } = req.body;

  let returnedValue = await Product.create({
    name,
    image,
    description,
    price,
    inventoryValue,
  });
  console.log(returnedValue);
  if (returnedValue) {
    console.log("upload complete");
  }
  res.send(returnedValue);
});

app.listen(3000, () => {
  console.log(`Server is Listening on 3000`);
});
