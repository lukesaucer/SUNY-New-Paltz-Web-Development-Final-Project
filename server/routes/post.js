const express = require('express');
const post = require('../models/post');
const router = express.Router();

router

// Create a .get route for getting all posts
.get('/', (req, res) => {
    try {
        const posts = post.getPosts();
        res.send(posts);
    } catch (err) {
        res.status(401).send({message: error.message});
    }
})

// Create a .post route for creating a new post
.post('/create', async (req, res) => {
    try {
        const post = await post.createPost(req.body);
        res.send({message: "Create Your Post!"})
    } catch (err) {
        res.status(401).send({message: err.message});
    }
})


// Create a .put route for editing a post
.put('/edit', async (req, res) => {
    try {
        const post = await post.editPost(req.body);
        res.send({message: "Post edited!"})
    } catch (err) {
        res.status(401).send({message: err.message});
    }
})

// Create a .delete route for deleting a post
.delete('/delete', async (req, res) => {
    try {
        post.deletePost(req.body.post_id);
        res.send({message: "Post deleted!"});
    } catch (err) {
        res.status(401).send({message: err.message});
    }
});

module.exports = router;