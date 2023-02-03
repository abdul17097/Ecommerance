const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
mongoose.set('strictQuery', false);
dotenv.config();
require('./Model.js/connection.js')
const UserRouter = require('./Router/register')
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
  }))
app.use(express.json())
app.use(cookieParser())

app.use('/',UserRouter);


// Server listen on below port
const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`Server Running On : http://localhost:${port}`);
})