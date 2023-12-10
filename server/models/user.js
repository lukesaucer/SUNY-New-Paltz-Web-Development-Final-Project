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
    let sql = `CREATE TABLE IF NOT EXISTS user (
        account_id INT NOT NULL UNIQUE AUTO_INCREMENT,
        username VARCHAR(64)  NOT NULL UNIQUE,
        password VARCHAR(64) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        CONSTRAINT account_pk PRIMARY KEY(account_id)    
    )`;
    await con.query(sql);
}

createTable();