const { model } = require('mongoose');
const { post } = require('../Controllers/PostControllers');
const { PostValidation } = require('../Middlewares/PostValidation');
const ensureAuthentication = require('../Middlewares/VerifyUser');

const router = require('express').Router();


router.post('/post', ensureAuthentication, PostValidation, post);


module.exports = router;