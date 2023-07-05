import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
const app = express();
app.use(cors());
// const PORT = process.env.PORT;
const PORT = 3000;
import  './DB/Connection.js';
import router from './Router/abc.js';

app.use(express.json()); 
app.use(cookieParser());
app.use(router);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})