
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


module.exports = {
    post
}