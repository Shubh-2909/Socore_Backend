// Converting project into ES6 moduling to Common-js moduling , for that we use "type":"module" in package.json
// const express = require('express');
// const connect = require('./config/database');
// const app = express();
import express from "express";
import bodyParser from "body-parser";
import {connect} from './config/database.js';
import apiRoutes from './routes/index.js';
import {UserRepository , TweetRepository} from './repository/index.js'
import passort from 'passport';
import {passportAuth} from './config/jwt-middleware.js'

import LikeService from "./services/like-service.js";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api' , apiRoutes);

app.use(passort.initialize());
passportAuth(passort);

import TweetService from './services/tweet-service.js'
// const Tweet = require('./models/tweet')
// const TweetRepository = require('./repository/tweet-repository');
// const Comment = require('./models/comment')
// const HashtagRepository = require('./repository/hashtag-repository');
// const TweetService = require('./services/tweet-service')

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
    // const tweetRepo  = new TweetRepository();
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
    // const tweet = await tweetRepo.getWithComments('65c79dd8e915c971c3f07a4b');
    // console.log(tweet);
    // const tweet = await tweetRepo.getAll(2,4);  //First 2 will be skipped and then 4 will be shown
    // console.log(tweet);
    // const tweet = await tweetRepo.getAll(0,4);
    // console.log(tweet[0].contentWithEmail);
    // await tweetRepo.create({content : 'With Hooks'});
    // let repo = new HashtagRepository();
    // await repo.bulkCreate([
    //     {
    //         title: 'Trend',
    //         tweets: []
    //     } , 
    //     {
    //         title: 'Excited',
    //         tweets: []
    //     } ,
    //     {
    //         title: 'Python',
    //         tweets: []
    //     } , 
    //     {
    //         title: 'Fun',
    //         tweets: []
    //     },
    //     {
    //         title: 'Career',
    //         tweets: []
    //     }
    // ])
    // let service = new TweetService();
    // service.create({content : 'Myself #Shubh'})

    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.getAll(0,10);
    // const user = await userRepo.getAll();
    // const likeService = new LikeService();
    // await likeService.toggleLike(tweet[0].id , 'Tweet' , user[0].id);

});




// * User Verification
// * user-> unique_id
// * https://www.mywebsite.com/verifyEmail/sgdiughdljljt3n
// * 
// * verifyEmail/:unique_id -> decrypttoken (unique_id) -> {id:2fd6 , email 426edw}
// * 
// * db -> userid -> unique_id -> craetedAt -> isVerified