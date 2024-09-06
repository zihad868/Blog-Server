
const post = async (req, res) => {
    try{
        const {authName, authEmail, authImg, title, description, postImg, postImg2} = req.body;
        
        const postCollection = req.db.collection('posts');
        const newPost = {authName, 
                         authEmail, 
                         authImg, 
                         title, 
                         description, 
                         postImg, 
                         postImg2,
                         createdAt: new Date()
                        };

        await postCollection.insertOne(newPost);

        console.log(newPost)
    
        res.status(201).json({
            message: 'Create Post Success',
            success: true
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
        const { queryEmail } = req?.query;
        const postCollection = await req.db.collection('posts');

       // Filter Email
       const filter = queryEmail ? { authEmail: queryEmail } : {};

       const posts = await postCollection.find(filter).sort({createdAt: -1}).toArray();
       
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