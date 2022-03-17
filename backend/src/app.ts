import express from "express";
import "dotenv/config";
import cors from 'cors';
import router from "./routes";
import '../src/config/database';

const app: express.Application = express();

app.use(express.json());
app.use(router)
app.use(cors());


export {app};