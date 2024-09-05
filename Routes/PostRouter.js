const { model } = require('mongoose');
const { post, getPosts } = require('../Controllers/PostControllers');
const { PostValidation } = require('../Middlewares/PostValidation');
const ensureAuthentication = require('../Middlewares/VerifyUser');

const router = require('express').Router();


router.post('/post', ensureAuthentication, PostValidation, post);
router.get('/posts', getPosts);


module.exports = router;