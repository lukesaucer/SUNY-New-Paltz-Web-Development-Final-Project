const express = require('express');
const User = require('../models/user');
const router = express.Router();

router

// Create a .get route for getting all users
.get('/', async (req, res) => {
    try {
        const users = await User.getUsers();
        res.send(users);
    } catch (err) {
        res.status(401).send({message: err.message});
    }
})


// Create a .post route for creating a new user
.post('/login', async (req, res) => {
    try {
        const user = await User.login(req.body);
        res.send({...user, password: undefined})
    } catch (err) {
        res.status(401).send({message: err.message});
    }
})

// Create a .post route for creating a new user
.post('/register', async (req, res) => { 
    try {
        console.log(req.body)
        const user = await User.register(req.body);
        res.send({...user, password: undefined})
    } catch (err) {
        res.status(401).send({message: err.message});
    }
})

// Create a .put route for editing a user
.put('/edit', async (req, res) => {
    try {
        let user = await User.editUser(req.body);
        res.send({...user, password: undefined})
    } catch (err) {
        res.status(401).send({message: err.message});
    }
})

// Create a .delete route for deleting a user
.delete('/delete', async (req, res) => {
    try {
      await User.deleteUser(req.body.account_id);
      res.send({message: "User deleted!"});
    } catch (err) {
        res.status(401).send({message: err.message});
    }
})

module.exports = router;