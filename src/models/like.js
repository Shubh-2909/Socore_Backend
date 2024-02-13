import mongoose, { mongo } from "mongoose";

const likeScema = new mongoose.Schema({
    onModel:{   //onModel is used for : on which model we are going to like
        type:String,
        required:true,
        enum : ['Tweet' , 'Comment']
    },
    likeable : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required:true
    }
},{timestamps:true})

const Like = mongoose.model('Like' , likeScema);

export default Like;


/*****************************  Explanation ************************************/
// onModel Field: This field specifies what type of model the like is associated with, whether it's a "Tweet" or a "Comment". It is of type String, meaning it will store the name of the model. The require: true indicates that this field is mandatory, and enum: ['Tweet', 'Comment'] specifies that the value of this field must be one of the given options - "Tweet" or "Comment".

// likeable Field: This field holds the reference to the liked object. It is of type mongoose.Schema.Types.ObjectId, which means it will store the ObjectId of the liked object in the database. The require: true indicates that this field is mandatory. The refPath: 'onModel' specifies that the reference should be resolved dynamically based on the value stored in the onModel field. So, if onModel is set to "Tweet", this field will reference a document in the "Tweet" collection; if onModel is set to "Comment", it will reference a document in the "Comment" collection.