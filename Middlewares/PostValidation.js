const Joi = require('joi');


const PostValidation  = (req, res, next) => {
    const schema = Joi.object({
        authName: Joi.string().min(3).max(50).required(),
        authEmail: Joi.string().email().required(),
        authImg: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        category: Joi.string().required(),
        postImg: Joi.string(),
        postImg2: Joi.string()
    })

    const { error } = schema.validate(req.body);
    if(error){
        return res.status(400) 
               .json({
                   message: 'Bad Request',
                   error: error
               })
    }

    next();
}


module.exports = {
    PostValidation
}