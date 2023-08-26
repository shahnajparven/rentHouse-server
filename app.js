import  express from "express";
const app = express();
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import path from "path";
import AppRoutes from './routes/index.js';

//import errorMidleware from "./middleware/error.js";

//config 
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: "config/config.env" });
}

app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route imports
// import {product}  from "./routes/productRoute.js";
// import {user} from "./routes/userRoute.js";
// import {pickup} from "./routes/pickupRoute.js";
// import {order} from "./routes/orderRoute.js";
// import {payment} from "./routes/paymentRoute.js";


//API
app.use('/api/v1', AppRoutes);
// app.use("/api/v1",product);
// app.use("/api/v1",user);
// app.use("/api/v1",pickup);
// app.use("/api/v1", order);
// app.use("/api/v1", payment);


//middleware for error
//app.use(errorMidleware);



export default app;


