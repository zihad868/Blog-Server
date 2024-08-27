const { model } = require("mongoose");
const UserModel = require("../Models/Users");
const bcrypt = require('bcrypt');
const { json } = require("body-parser");

const signup = async(req, res) => {
    try{
        const {name, email, password, image} = req.body;
        const user = await UserModel.findOne({email});

        if(user){
            return res.status(409)
                .json({
                    message: 'User Already Exist ..! Please Login',
                    success: false
                })
        }

        const newUser = new UserModel({name, email, password, image});
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();
        res.status(201)
              .json({
                message: 'User Create Success',
                success: true
              })
    }
    catch(error){
        res.status(500)
            .json({
                message: 'Internal Server Error',
                success: false
        })
    }
}


module.exports = {
    signup
}