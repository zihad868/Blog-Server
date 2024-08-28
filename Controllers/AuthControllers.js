// Controllers/AuthControllers.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  try {
    const { name, email, password, image } = req.body;
    const usersCollection = req.db.collection('users');

    const user = await usersCollection.findOne({ email });

    if (user) {
      return res.status(409).json({
        message: 'User Already Exists. Please Login',
        success: false
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name,
      email,
      password: hashedPassword,
      image,
      role: 'user'
    };

    await usersCollection.insertOne(newUser);

    res.status(201).json({
      message: 'User Created Successfully',
      success: true
    });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      success: false,
      error: error.message
    });
  }
};

const signin = async(req, res) => {
  try{
    const { email, password }  = req.body;
    const userCollection = req.db.collection('users');

    const user = await userCollection.findOne({ email })

    if(!user){
      return res.status(400)
          .json({
             message: "User Does't Exist.! Please Signup",
             success: false
          })
    }

    const isPassEqual = await bcrypt.compare(password, user.password);

    if(!isPassEqual){
       return res.status(400)
       .json({
         message: 'Email or Password is incorrect',
         success: false
       })
    }

    const jwtToken = jwt.sign(
      {email: user.email, _id: user._id},
      process.env.JWT_SECRET,
      {expiresIn: '2days'}
      )
    res.status(200)
       .json({
         message: 'Login Success',
         success: true,
         jwtToken,
         email,
         name: user.name
       })

  }catch(error){
     res.status(500)
        .json({
           message: 'Internal Server Error',
           success: false
        })
  }
}


const userInfo = async(req, res) => {
   try{

      let { queryEmail } = req?.query;
      const userCollection = await req.db.collection('users');

      const user = await userCollection.findOne({ email: queryEmail });

      if(!user){
        return res.status(400)
            .json({
               message: "User Does't Exist",
               success: false
            })
      }

      const {name, email, image} = user;
      const userInformation = {name, email, image, role};

      res.status(200)
         .json({
           message: "Get User Information successfully",
           success: true,
           userInformation 
         })
   }catch(error){
    res.status(500)
        .json({
           message: 'Internal Server Error',
           success: false
        })
   }
}

module.exports = {
  signup,
  signin,
  userInfo
};
