import TweetService from '../services/tweet-service.js';
import upload from '../config/file-upload-s3-config.js'
const tweetService = new TweetService();


const singleUploader = upload.single('image');


export const createTweet = async (req, res) => {
    try {
        singleUploader(req, res , async function(err , data){
            if(err){
                return res.status(500).json({
                    error:err
                })
            }
            console.log('Image url is' , req.file);
            const result= {...req.body};
            result.image = req.file.location;
            const response = await tweetService.create(result);
            return res.status(201).json({
            success : true,
            messagge : 'Successfully created a new tweet',
            data : response,
            err : {}
        })
        })
        
    } catch (error) {
        return res.status(500).json({
            success : false,
            messagge : 'Something went wrong',
            data : {},
            err : error
        })
    }
}

export const getTweets = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success : true,
            messagge : 'Successfully fetched a tweet',
            data : response,
            err : {}
        })
    } catch (error) {
        return res.status(201).json({
            success : false,
            messagge : 'Something went wrong',
            data : {},
            err : error
        })
    }
}



