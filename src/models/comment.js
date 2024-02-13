import mongoose from "mongoose";

const commentScema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    onModel: {
        type:String,
        required:true,
        enum : ['Tweet' , 'Comment']
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'onModel',
        required:true
    }
} , {timestamps:true});

const Comment =mongoose.model("Comment",commentScema);  //Tweet will be the name of Schema
// module.exports=Comment;
export default Comment;