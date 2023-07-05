import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
mongoose.set('bufferCommands', false);

const userSchema = new mongoose.Schema({

    name:{
        type :String,
        required :true
    },
    email:{
        type :String,
        required :true
    },
    phone:{
        type :String,
        required :true
    },
    latitude:{
        type :String,
        required :true
    },
    longitude:{
        type :String,
        required :true
    },
    password:{
        type :String,
        required :true
    },
    cpassword:{
        type :String,
        required :true
    },
    type:{
        type :String,
        required :true 
    },
    tokens:[
        {
            token :{
                type :String,
                required :true 
            }
        }
    ]
})




userSchema.pre('save', async function (next) {
    console.log("hello from pree")

    if (this.isModified('password')) {
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword= await bcrypt.hash(this.cpassword,12);
    }

    next();

});

userSchema.methods.generateAuthToken = async function(){

    try {
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token; 
    }catch(e){
        console.log(e);
    }


}
const User = mongoose.model('USER',userSchema);
export default User;