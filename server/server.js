import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import {readdirSync} from 'fs'; //node js core fs module


//const morgan = require('morgan'); //can't use import syntax with morgan
dotenv.config();

const app = express();

//db
mongoose.connect(process.env.DATABASE)
.then(()=>console.log('DB Connected'))
.catch((err)=>console.error("DB Connection Failed",err))

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//autoload routes
readdirSync('./routes').map((r)=> app.use('/api',require(`./routes/${r}`)));

//listen
const port = process.env.PORT || 8000;
app.listen(port,()=> console.log(`Server is running on ${port}`))