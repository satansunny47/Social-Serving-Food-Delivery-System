import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
mongoose.set('bufferCommands', false);

const foodSchema = new mongoose.Schema({

    name:{
        type :String,
        required :true
    },
    price:{
        type :String,
        required :true
    },
    amount:{
        type :String,
        required :true
    },
    type:{
        type :String,
        required:true
    },
    description:{
        type :String,
        required:true
    },
    restaurant:{
        type:String,
        required:true
    },
    cat:{
        type:String,
        required:true
    }
})
const Food = mongoose.model('FOOD',foodSchema);
export default Food;