const express = require('express');
const post = require('../models/post');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        const posts = post.getPosts();
        res.send(posts);
    } catch (err) {
        res.status(401).send({message: error.message});
    }
});

module.exports = router;