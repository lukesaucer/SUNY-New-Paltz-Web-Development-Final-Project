const posts = [
    {
        postId: 1,
        accountId: 1,
        repositoryId: 1,
        tagId: 1,
        attachmentId: 1,
        title: 'Post 1',
        PostContent: 'Post 1 Content',
        URLLinks: 'https://www.google.com',
        TimeStamp: '2020-01-01 00:00:00',
    },
    {
        postId: 2,
        accountId: 2,
        repositoryId: 2,
        tagId: 2,
        attachmentId: 2,
        title: 'Post 2',
        PostContent: 'Post 2 Content',
        URLLinks: 'https://www.google.com',
        TimeStamp: '2020-01-01 00:00:00',
    },
    {
        postId: 3,
        accountId: 3,
        repositoryId: 3,
        tagId: 3,
        attachmentId: 3,
        title: 'Post 3',
        PostContent: 'Post 3 Content',
        URLLinks: 'https://www.google.com',
        TimeStamp: '2020-01-01 00:00:00',
    },
];

//function to get ALL posts
let getPosts = () => posts;

// Need to export to allow access
module.exports = { getPosts };

const con = require('../db_connect');

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS posts (
        postId INT NOT NULL AUTO_INCREMENT,
        accountId INT NOT NULL,
        repositoryId INT NOT NULL,
        tagId INT NOT NULL,
        attachmentId INT NOT NULL,
        title VARCHAR(50) NOT NULL,
        PostContent VARCHAR(50) NOT NULL,
        URLLinks VARCHAR(50) NOT NULL,
        TimeStamp DATETIME NOT NULL,
        CONSTRAINT post_pk PRIMARY KEY (postId),
        CONSTRAINT post_fk FOREIGN KEY (accountId) REFERENCES accounts(accountId),
        CONSTRAINT post_fk2 FOREIGN KEY (repositoryId) REFERENCES repositories(repositoryId),
        CONSTRAINT post_fk3 FOREIGN KEY (tagId) REFERENCES tags(tagId),
        CONSTRAINT post_fk4 FOREIGN KEY (attachmentId) REFERENCES attachments(attachmentId)
    )`;
    await con.query(sql);
}

createTable();