import express from 'express';

import {createTweet , getTweets} from '../../controllers/tweet-controller.js'
import {toggleLike} from '../../controllers/like-controller.js'
import {createComment} from '../../controllers/comment-controller.js'

const router = express.Router();

router.post('/tweets' , createTweet);
router.get('/tweets/:id' , getTweets);
router.post('/likes/toggle' , toggleLike);

router.post('/comments' , createComment)

export default router;