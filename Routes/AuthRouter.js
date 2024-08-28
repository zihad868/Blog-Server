const { signup, signin, userInfo } = require('../Controllers/AuthControllers');
const { signupValidation, signinValidation } = require('../Middlewares/AuthValidation');
const ensureAuthentication = require('../Middlewares/VerifyUser');

const router = require('express').Router();

// Authentication
router.post('/signup', signupValidation, signup);
router.post('/signin', signinValidation, signin);

// Get User
router.get('/me', ensureAuthentication, userInfo);

module.exports = router;