import TweetService from '../services/tweet-service.js';

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success : true,
            messagge : 'Successfully created a new tweet',
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