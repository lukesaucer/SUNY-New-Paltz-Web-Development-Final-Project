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
    let sql = `CREATE TABLE IF NOT EXISTS repository (
        repository_id INTEGER NOT NULL UNIQUE AUTO_INCREMENT,
        account_id INTEGER NOT NULL,
        post_id INTEGER,
        tag_id INTEGER,
        category_id INTEGER,
        title VARCHAR(64) NOT NULL,
        time_stamp BLOB NOT NULL,
        CONSTRAINT repository_pk PRIMARY KEY(repository_id),
        CONSTRAINT account_fk_repository FOREIGN KEY(account_id) REFERENCES user(account_id),
        CONSTRAINT post_fk_repository FOREIGN KEY(post_id) REFERENCES post(post_id),
        CONSTRAINT tag_fk_repository FOREIGN KEY(tag_id) REFERENCES tags(tag_id),
        )`;
    await con.query(sql);
}

createTable();