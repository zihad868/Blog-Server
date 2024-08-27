const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(50).required(),
        image: Joi.string().required(),
    })

    const {error} = schema.validate(req.body)

    if(error){
        return res.status({
            message: 'Bad Request',
            error: error
        })
    }
    next();
}


const signinValidation = (req, res, next) => {
    const schema = joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(50).required(),
    })

    const {error} = schema.validate(req.body)

    if(error){
        return res.status({
            message: 'Bad Request',
            error: error
        })
    }
    next();
}

module.exports = {
    signupValidation,
    signinValidation
}