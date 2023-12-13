const express = require('express');
const app = express();
const path = require('path');

const userRoutes = require('./server/routes/user');
const postRoutes = require('./server/routes/post');
const repositoryRoutes = require('./server/routes/repository');
//croute to at least one other entity that is NOT user/customer/etc.

app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/login.html')));

//CORS middleware

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/repositories', repositoryRoutes);
// app.use for routes above

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));