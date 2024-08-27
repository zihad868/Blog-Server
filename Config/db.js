// connectDB.js
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7lbrva6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a single instance of the MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB(req, res, next) {
  try {
    await client.connect();
    console.log("MongoDB Connect Success");
    req.db = client.db('MarketingBlog');
    
    next(); 
  } catch (error) {
    console.error('MongoDB Connection Error', error);
    res.status(500).json({
      message: 'Internal Server Error',
      success: false,
      error: error.message
    });
  }
}

module.exports = connectDB;
