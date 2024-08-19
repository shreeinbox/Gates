let posts = [
    {id: 1, title: 'S s title'},
    {id:2, title: 'R s title'},
    {id:3, title: 'K s title'}
];

const getPosts = (req, res) => {
    res.status(200).json(posts)
}

const getPost = (req, res, next) =>{
    let postId = parseInt(req.params.id)

    let selectedPost = posts.find((post)=> post.id === postId)

    if(!selectedPost){
        const error = new Error(`Error while retrieving post id ${postId}`);
        error.status = 404;
        return next(error)
    }
    res.status(200).json(selectedPost)
}

const createPost = (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title : req.body.title
    }

    if (!newPost.title) {
        const error = new Error(`Error creating a new post without title`)
        res.status(404).json(message)
        return next(error)
    }
    posts.push(newPost)
    res.status(200).json(posts);
}

const updatePost = (req, res, next) => {
    const updPostId = parseInt(req.params.id);
    const updatedPost = posts.find((post) => post.id === updPostId)
    
    if(!req.body.title){
        return next(new Error(`there is no new title to update`))
    }
    
    updatedPost.title = req.body.title
    res.status(200).json(posts)
}

const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const deletedPost = posts.filter((post) => post.id == id)
    const restAllPost = posts.filter((post) => post.id !== id)

    res.status(200).json({allPosts : restAllPost,
                          deletedPost : deletedPost
    })
    
}

export { getPosts, getPost, createPost, updatePost, deletePost}