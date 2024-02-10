const express = require('express');
const connect = require('./config/database');
const app = express();

// const Tweet = require('./models/tweet')
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment')

app.listen(3000 , async ()=>{
    console.log(`Server Started`)
    await connect();
    console.log(`Mongo db connected`); 
    // *** These codes are written when repository layer wasn't exist we directly import from models and implement the functions on it ******
    // const tweet = await Tweet.create({
    //     content:'Third Tweet',
    //     email:'shubh@gmail.com'
    // });
    // const tweets = await Tweet.find();
    // const tweets = await Tweet.find({userEmail:'a@b.com'});
    // const tweet = await Tweet.findById('65c78c4f0318ebcdbf423944');
    // tweet.userEmail = 'b@c.com';
    // await tweet.save();
    // *****
    const tweetRepo  = new TweetRepository();
    // const tweet = await tweetRepo.update('65c78c4f0318ebcdbf423944' , {content: "2nd time Updated Tweet 1"});
    // console.log(tweet); //In this it will show the previous data but it update the data in the mongodb database. We use findByIdAndUpdate in Repository layer , it works like that only , it find by id and print it and then update it into the database. to get rid of this we use {new: true } in the repo layer as the parameter of findByIdAndUpdate.
    // const tweet = await tweetRepo.create({content :  'my tweet'});
    // tweet.comments.push({content:'first comment'});
    // await tweet.save();
    // const tweet = await tweetRepo.create({content : "Tweet with comment schema"})
    // const comment = await Comment.create({content : "New comment"});
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);
    const tweet = await tweetRepo.getWithComments('65c79dd8e915c971c3f07a4b');
    console.log(tweet);
})
