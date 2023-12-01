const repositories = [
    {
        repositoryId: 1,
        accountId: 1,
        postId: 1,
        tagId: 1,
        categoryId: 1,
        title: 'Repository 1',
        timeStamp: '2020-01-01 00:00:00',
    },
    {
        repositoryId: 2,
        accountId: 2,
        postId: 2,
        tagId: 2,
        categoryId: 2,
        title: 'Repository 2',
        timeStamp: '2020-01-01 00:00:00',
    },
    {
        repositoryId: 3,
        accountId: 3,
        postId: 3,
        tagId: 3,
        categoryId: 3,
        title: 'Repository 3',
        timeStamp: '2020-01-01 00:00:00',
    },
];

//function to get ALL repositories
let getRepositories = () => repositories;

// Need to export to allow access
module.exports = { getRepositories };

const con = require('../db_connect');

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS repositories (
        repositoryId INT NOT NULL AUTO_INCREMENT,
        accountId INT NOT NULL,
        postId INT NOT NULL,
        tagId INT NOT NULL,
        categoryId INT NOT NULL,
        title VARCHAR(50) NOT NULL,
        timeStamp DATETIME NOT NULL,
        CONSTRAINT repository_pk PRIMARY KEY (repositoryId),
        CONSTRAINT repository_fk FOREIGN KEY (accountId) REFERENCES accounts(accountId),
        CONSTRAINT repository_fk2 FOREIGN KEY (postId) REFERENCES posts(postId),
        CONSTRAINT repository_fk3 FOREIGN KEY (tagId) REFERENCES tags(tagId),
        CONSTRAINT repository_fk4 FOREIGN KEY (categoryId) REFERENCES categories(categoryId)
    )`;
    await con.query(sql);
}

createTable();