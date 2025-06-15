import express from "express";
import dotenv from "dotenv";
import { bank_router } from "./routes/bank.routes.js";
import { admin_router } from "./routes/admin.routes.js";

dotenv.config({});


const app = express();
//middlewares
app.use(express.json());

//routers
app.use('/api/v1/bank',bank_router);
app.use('/api/v1/admin',admin_router);


export {app};
