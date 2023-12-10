
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

const posts = [
    {
        post_id: 1,
        account_id: 1,
        repository_id: 1,
        tag_id: 1,
        attachment_id: 1,
        title: 'Post 1',
        post_content: 'Post 1 Content',
        url_links: 'https://www.google.com',
        time_stamp: '2020-01-01 00:00:00',
    },
    {
        post_id: 2,
        account_id: 2,
        repository_id: 2,
        tag_id: 2,
        attachment_id: 2,
        title: 'Post 2',
        post_content: 'Post 2 Content',
        url_links: 'https://www.google.com',
        time_stamp: '2020-01-01 00:00:00',
    },
    {
        post_id: 3,
        account_id: 3,
        repository_id: 3,
        tag_id: 3,
        attachment_id: 3,
        title: 'Post 3',
        post_content: 'Post 3 Content',
        url_links: 'https://www.google.com',
        time_stamp: '2020-01-01 00:00:00',
    },
];

//function to get ALL posts
let getPosts = () => posts;

async function postExists(title) {
    const sql = `
        SELECT * FROM post
        WHERE title = '${title}'
    `;
    let p = await con.query(sql);
    console.log(u);
    return p;
}

async function createPost(post) {
    const p = postExists(post.title);
    if (p.length > 0) throw Error("Post title already exists!")
    const sql = `
        INSERT INTO post (account_id, repository_id, tag_id, attachment_id, title, post_content, url_links, time_stamp)
        VALUES ('${post.account_id}', '${post.repository_id}', '${post.tag_id}', '${post.attachment_id}', '${post.title}', '${post.post_content}', '${post.url_links}', '${post.time_stamp}'
        )`;

    await con.query(sql);
    const newPost = await getPost(post);
    return newPost[0];
}

async function getPost(post) {
    let sql;
    if (post.post_id) {
        sql = `SELECT * FROM post
        WHERE post_id = ${post.post_id}
        `
    } else {
        sql = `SELECT * FROM post
        WHERE title = '${post.title}'
        `
    }
    return await con.query(sql);
}

async function editPost(post) {
    const sql = `UPDATE post SET
    title = '${post.title}'
    WHERE post_id = ${post.post_id}
    `;

    await con.query(sql);
    const newPost = await getPost(post);
    return newPost[0];
}

async function deletePost(post_id) {
    const sql = `DELETE FROM post
    WHERE post_id = ${post_id}
    `;

    await con.query(sql);
}

// Need to export to allow access
module.exports = { getPosts };
