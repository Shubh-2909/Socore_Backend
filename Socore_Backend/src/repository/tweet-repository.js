import Tweet from '../models/tweet.js'

class TweetRepository {
    async create(data){
       try {
           const tweet = await Tweet.create(data);
           return tweet;
       } catch (error) {
           console.log(error)
       } 
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error)
        } 
    }

    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate( {path:'comments'} ).lean();   // {path:'comments'} aise likne ka karan ye hai ki , comments array k indr initailize hai. {'comments'} sirf tb likhne jb array k andr naa ho. //lean functiom gives simple/plane javascript object not mongoose object. It is used for slight optimization
            return tweet;
        } catch (error) {
            console.log(error)
        } 
    }

    // We are not giving access to user to update a tweet
    // async update(tweetId , data){
    //     try {
    //         const tweet = await Tweet.findByIdAndUpdate(tweetId , data , {new:true});
    //         return tweet;
    //     } catch (error) {
    //         console.log(error)
    //     } 
    // }

    async destroy(id){
        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error)
        } 
    }

    // We use getAll function based on pagination.
    // Pagination is the process of separating content into pages.

    async getAll(offset , limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error)
        } 
    }

    async find(id){
        try {
            const tweet = await Tweet.findById(id).populate({path : 'likes'});  // Populate is only applied on mongoose object only (should not be on final query object) and when this convert into query object then it returns , because await is waiting for it to convert.
            return tweet;
        } catch (error) {
            console.log(error);   
        }
    }
}

export default TweetRepository;