import "dotenv/config";
import express from 'express';
import cors from 'cors';
import bankRouter from "./src/routers/router.js";
import { configureDb } from "./src/configs/DbConfig.js";

const app = express();

app.use(cors());
app.use(express.json())

app.use(bankRouter);

app.listen(process.env.PORT, ()=>{
    configureDb();
    console.log(`listening on port ${process.env.PORT}`)
});