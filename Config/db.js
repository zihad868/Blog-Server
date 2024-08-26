
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7lbrva6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB(){
   try{
     await client.connect();
     console.log("MongoDB Connect Success");
     return client.db('MarketingBlog')
   }catch(error){
     console.error('MongoDB Connection Error', error);
     process.exit(1);
   }
}

module.exports = connectDB;