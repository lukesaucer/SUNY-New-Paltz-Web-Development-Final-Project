const con = require('./db_connect');

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


const users = [
    {
        account_id: 1,
        username: 'admin',
        password: '123456',
        email:'admin@admin.com',
    },
    {
        account_id: 2,
        username: 'user1',
        password: '123456',
        email:'user1@user.com',
    },
    {
        account_id: 3,
        username: 'user2',
        password: '123456',
        email:'user2@user.com',
    },
];

//function to get ALL users
let getUsers = () => users;

async function userExists(username) {
    const sql = `
        SELECT * FROM user 
        WHERE username = '${username}'
    `;
    let u = await con.query(sql);
    console.log(u);
    return u;
}

async function register(user) {
    const u = userExists(user.username);
    if (u.length > 0) throw Error("Username already exists!")
    const sql = `
        INSERT INTO user (username, password, email)
        VALUES ('${user.username}', '${user.password}', '${user.email}'
        )`;

    await con.query(sql);
    const newUser = await getUser(user);
    return newUser[0];
}

async function login(user) {
    let cUser = await userExists(user.username);
    if (!cUser[0]) throw Error("Username does not exist!");
    if(cUser[0].password != user.password) throw Error("Password is incorrect!");

    return cUser[0];
}

async function getUser(user) {
    let sql;
    if (user.account_id) {
        sql = `SELECT * FROM user 
        WHERE account_id = ${user.account_id}
        `
    } else {
        sql = `SELECT * FROM user 
        WHERE username = '${user.username}'
        `
    }
    return await con.query(sql);
}

async function editUser(user) {
    const sql = `UPDATE users SET
    username = '${user.username}'
    WHERE account_id = ${user.account_id}
    `;

    await con.query(sql);
    const newUser = await getUser(user);
    return newUser[0];
}

async function deleteUser(account_id) {
    const sql = `DELETE FROM user
    WHERE account_id = ${account_id}
    `;

    await con.query(sql);
}





// Start of code from Module 10 to finish the project.


async function fetchData(route = '', data = {}, methodType){
    const response = await fetch(`http://localhost:3000${route}`, {
        method: methodType, // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if(response.ok) {
        return await response.json();
    } else {
        throw await response.json();
    }
}

export { fetchData, deleteUser, editUser, getUser, login, register, userExists };







// Need to export to allow access
module.exports = { getUsers };