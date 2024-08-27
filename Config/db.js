// connectDB.js
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7lbrva6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

let db; // This variable will hold the database connection

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  if (!db) { 
    try {
      await client.connect(); 
      console.log("MongoDB Connected");
      db = client.db('MarketingBlog'); 
    } catch (error) {
      console.error('MongoDB Connection Error', error);
      process.exit(1);
    }
  }
  return db; 
}

module.exports = connectDB;
