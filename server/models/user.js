const users = [
    {
        accountId: 1,
        userName: 'admin',
        password: '123456',
        email:'admin@admin.com',
    },
    {
        accountId: 2,
        userName: 'user1',
        password: '123456',
        email:'user1@user.com',
    },
    {
        accountId: 3,
        userName: 'user2',
        password: '123456',
        email:'user2@user.com',
    },
];

//function to get ALL users
let getUsers = () => users;

// Need to export to allow access
module.exports = { getUsers };


const con = require('../db_connect');

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS users (
        accountId INT NOT NULL AUTO_INCREMENT,
        userName VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        CONSTRAINT user_pk PRIMARY KEY (accountId)
    )`;
    await con.query(sql);
}

createTable();