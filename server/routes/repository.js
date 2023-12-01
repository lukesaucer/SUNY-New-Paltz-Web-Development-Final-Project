const express = require('express');
const user= require('../models/repository');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        const repositories = repository.getRepositories();
        res.send(repositories);
    } catch (err) {
        res.status(401).send({message: error.message});
    }
});

module.exports = router;
