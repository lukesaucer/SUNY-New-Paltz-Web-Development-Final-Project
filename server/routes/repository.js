const express = require('express');
const repository= require('../models/repository');
const router = express.Router();

router

// Create a .get route for getting all repositories
.get('/', (req, res) => {
    try {
        const repositories = post.getRepositories();
        res.send(repositories);
    } catch (err) {
        res.status(401).send({message: error.message});
    }
})

// Create a .post route for creating a new post
.post('/create', async (req, res) => {
    try {
        const repository = await post.createRepository(req.body);
        res.send({message: "Create Your Repository!"})
    } catch (err) {
        res.status(401).send({message: err.message});
    }
})

// Create a .put route for editing a repository
.put('/edit', async (req, res) => {
    try {
        const repository = await repository.editRepository(req.body);
        res.send({message: "Repository edited!"})
    } catch (err) {
        res.status(401).send({message: err.message});
    }
})

// Create a .delete route for deleting a repository
.delete('/delete', async (req, res) => {
    try {
        post.deleteRepository(req.body.repository_id);
        res.send({message: "Repository deleted!"});
    } catch (err) {
        res.status(401).send({message: err.message});
    }
});

module.exports = router;
