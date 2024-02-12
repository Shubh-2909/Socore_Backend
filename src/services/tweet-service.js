import  {HashtagRepository , TweetRepository }  from   '../repository/index.js'

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        /*
        Main agenda to extract hashtags.
        How the content looks likes?
        this is my #first #tweet . I am really #excited.
        This can be extracted using normal programming convention.
        Or using regular expression(that is avaliable online for every substring matching purpose).
        */
       // Anywhere let is used because , aage map function lga k same variable me change krna tha isliye use kiya.
       let tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extracts hashtags
       tags = tags.map((tag) => tag.substring(1)).map(tag => tag.toLowerCase()); //another map is for to lowercase the hashtags
       const tweet = await this.tweetRepository.create(data);
       let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
       // ['excited' , 'coding' , 'js' , 'career'] -> [{title : 'excited'} , {title : 'career'}] // We do have excited and career , remaining ones we have to store.
       let titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);
       // Now the output is ['excited' , 'career']
       let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
       // We need to create a object like this [{title : 'coding' , tweets : []}] and we get like this ['coding'] . We need to do some processing on it.
       newTags = newTags.map(tag => {
        return {title : tag , tweets : [tweet.id]}
       });
       await this.hashtagRepository.bulkCreate(newTags);
       alreadyPresentTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
       });
       
       // todo create hashtag and add here 
       /*
       1. bulkcreate in mongoose 
       2. filter title of hashtag based on multiple tags
       3. How to add tweet id inside all the hashtags
       */
       
       return tweet;
    }
}

export default TweetService;