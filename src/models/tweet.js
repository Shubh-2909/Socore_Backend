const mongoose = require('mongoose');

const tweetScema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max: [250 , 'Tweet cannot be more than 250 characters']   //second parameter is the error that we will be throwing when the character limit exceeds 250.
    },
    // comments:[   // We use [] , this shows multiple comments means array.
    //     {
    //         content:{
    //             type:String, 
    //             required:true
    //         }
    //     }
    // ]  // This is the example of nesting
    // If we dont comments as this , then  we can make comment model all together different and associate to it.
    // comments : [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Comment'
    //     }
    // ]
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Hashtag'
        }
    ]
} , {timestamps:true});

// In Mongoose, a virtual is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents.
// Virtuals computed during the run time.
tweetScema.virtual('contentWithEmail').get(function process(){
    return `${this.content} \nCreated by: ${this.userEmail}`;
})

// Hooks
// tweetScema.pre('save' , function(next){
//     console.log('Inside a hook');
//     this.content = this.content + '....';
//     next();
// })

const Tweet =mongoose.model("Tweet",tweetScema);  //Tweet will be the name of Schema
module.exports=Tweet;
