import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from 'path';
const __dirname= path.resolve();
dotenv.config({ path:path.join(__dirname,'/config.env') })
const db = process.env.DATABASE; 

mongoose.connect(db,{
     useNewUrlParser: true ,
     useUnifiedTopology: true
}).then(() => {
    console.log('connection successfuhhl')
}).catch((err) => {
    console.log(err)
})


