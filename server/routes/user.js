const express = require('express');
const user= require('../models/user');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        const users = user.getUsers();
        res.send(users);
    } catch (err) {
        res.status(401).send({message: error.message});
    }
});

module.exports = router;