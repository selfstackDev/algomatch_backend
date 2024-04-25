import express from 'express';
const app = express();
import dotenv from "dotenv";
dotenv.config()
const PORT=3000 || process.env.PORT
import mongoDbConnect from './Config/DataBase.js';
import AdminRoutes  from './Routes/Admin.js'

mongoDbConnect()
app.use('/Admin',AdminRoutes )


app.listen(PORT,()=>console.log(`SERVER RUNNING ON ${PORT}...`))