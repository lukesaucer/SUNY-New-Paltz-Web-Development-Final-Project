const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

const userRoutes = require('./server/routes/user');
const postRoutes = require('./server/routes/post');
const repoRoutes = require('./server/routes/repository');
//croute to at least one other entity that is NOT user/customer/etc.

//CORS middleware

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/repos', repoRoutes);
// app.use for routes above

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));