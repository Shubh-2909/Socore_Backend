import mongoose from "mongoose";

const commentScema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userEmail:{
        type:String
    },
} , {timestamps:true});

const Comment =mongoose.model("Comment",commentScema);  //Tweet will be the name of Schema
// module.exports=Comment;
export default Comment;