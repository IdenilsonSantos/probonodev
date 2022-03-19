import express from "express";
import "dotenv/config";
import router from "./routes";
import '../src/config/database';
import cors from 'cors'

const app: express.Application = express();

app.use(express.json());
app.use(cors());
app.use(router);


export {app};