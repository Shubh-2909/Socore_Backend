import mongoose, { model } from "mongoose";

const userScema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
} , {timestamps: true})

const User = mongoose.model('User' , userScema);

export default User;