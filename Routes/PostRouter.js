const { model } = require('mongoose');
const { post } = require('../Controllers/PostControllers');
const { PostValidation } = require('../Middlewares/PostValidation');

const router = require('express').Router();


router.post('/post', PostValidation, post);


module.exports = router;