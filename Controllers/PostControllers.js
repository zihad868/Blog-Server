
const post = async (req, res) => {
    try{
        const {authName, authEmail, authImg, title, description, postImg, postImg2} = req.body;
        
        const postCollection = req.db.collection('post');
        const newPost = {authName, authEmail, authImg, title, description, postImg, postImg2};

        await postCollection.insertOne(newPost);
    
        res.status(201).json({
            message: 'Create Post Success',
            success: false
        })
    }catch(error){
        console.error("Post Add failed", error);
        res.status(500)
            .json({
                message: 'Internal Server Error',
                success: false,
                error: error.message
            })
    }
} 

const getPosts = async (req, res) => {
    try{
        const postCollection = await req.db.collection('post');

       const posts = await postCollection.find().toArray();
       
       if(!posts){
          return res.status(400)
                  .json({
                    message: "Can't get any posts",
                    success: false
                  })
       }

       res.status(200).json({
          message: 'Get posts success',
          success: true,
          posts: posts
       })

    }catch(error){
        res.status(500)
            .json({
                message: 'Internal Server Error',
                error: error.message
            })
    }
}

module.exports = {
    post,
    getPosts
}