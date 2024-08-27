const { signup } = require('../Controllers/AuthControllers');
const { signupValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/signin', (req, res) => {
    res.send("Signin Success")
})

router.post('/signup', signupValidation, signup)


module.exports = router;