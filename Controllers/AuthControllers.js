// Controllers/AuthControllers.js
const bcrypt = require('bcrypt');

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
      image
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

module.exports = {
  signup
};
