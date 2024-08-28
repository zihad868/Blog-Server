const { signup, signin, userInfo } = require('../Controllers/AuthControllers');
const { signupValidation, signinValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

// Authentication
router.post('/signup', signupValidation, signup);
router.post('/signin', signinValidation, signin);

// Get User
router.get('/me', userInfo);

module.exports = router;