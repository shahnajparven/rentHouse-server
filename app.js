const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const path = require("path");

const errorMidleware = require("./middleware/error");

//config 
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const pickup = require("./routes/pickupRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");


//API
app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",pickup);
app.use("/api/v1", order);
app.use("/api/v1", payment);


//middleware for error
app.use(errorMidleware);



module.exports = app;


