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
    let sql = `CREATE TABLE IF NOT EXISTS post (
        	post_id INT NOT NULL UNIQUE AUTO_INCREMENT,
        	account_id INT NOT NULL, 
        	repository_id INT,
            tag_id INT,
        	attachment_id INT,
        	title VARCHAR(64) NOT NULL,
        	post_content STRING NOT NULL,
        	url_links VARCHAR(255),
        	time_stamp STRING NOT NULL,
        	CONSTRAINT post_pk PRIMARY KEY(post_id),
        	CONSTRAINT account_fk_post FOREIGN KEY(account_id) REFERENCES user(account_id),
        	CONSTRAINT repository_fk_post FOREIGN KEY(repository_id) REFERENCES repository(repository_id),
        	CONSTRAINT tag_fk_post FOREIGN KEY(tag_id) REFERENCES tags(tag_id),
        	CONSTRAINT attachment_fk_post FOREIGN KEY(attachment_id) REFERENCES attachments(attachment_id),
        )`;
        
    await con.query(sql);
}

createTable();