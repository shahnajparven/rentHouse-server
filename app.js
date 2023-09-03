import  express from "express";
import cors from 'cors';

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import path from "path";
import AppRoutes from './routes/index.js';

import errorMidleware from "./middleware/error.js";

const app = express();

const options = [
    cors({ origin: true, credentials: true }),
    express.json({ limit: '30mb' }),
    cookieParser(),
    bodyParser.urlencoded({ extended: true }),
    fileUpload()
];

app.use("*",options);


//config 
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: "config/config.env" });
}

// app.use(express.json())
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());


//API
app.use('/api/v1', AppRoutes);


//middleware for error
app.use(errorMidleware);



export default app;


