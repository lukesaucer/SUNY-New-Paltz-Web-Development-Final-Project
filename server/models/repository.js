
const con = require('./db_connect');

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS repository (
        repository_id INTEGER NOT NULL UNIQUE AUTO_INCREMENT,
        account_id INTEGER NOT NULL,
        post_id INTEGER,
        tag_id INTEGER,
        category_id INTEGER,
        title VARCHAR(64) NOT NULL,
        time_stamp VARCHAR(128) NOT NULL,
        CONSTRAINT repository_pk PRIMARY KEY(repository_id),
        CONSTRAINT account_fk_repository FOREIGN KEY(account_id) REFERENCES user(account_id),
        CONSTRAINT tag_fk_repository FOREIGN KEY(tag_id) REFERENCES tags(tag_id)
        )`;
    await con.query(sql);
}

    //  CONSTRAINT post_fk_repository FOREIGN KEY(post_id) REFERENCES post(post_id),

createTable();

const repositories = [
    {
        repository_id: 1,
        account_id: 1,
        post_id: 1,
        tag_id: 1,
        category_id: 1,
        title: 'Repository 1',
        time_stamp: '2020-01-01 00:00:00',
    },
    {
        repository_id: 2,
        account_id: 2,
        post_id: 2,
        tag_id: 2,
        category_id: 2,
        title: 'Repository 2',
        time_stamp: '2020-01-01 00:00:00',
    },
    {
        repository_id: 3,
        account_id: 3,
        post_id: 3,
        tag_id: 3,
        category_id: 3,
        title: 'Repository 3',
        time_stamp: '2020-01-01 00:00:00',
    },
];


//function to get ALL posts
let getRepositories = () => repositories;

async function repositoryExists(title) {
    const sql = `
        SELECT * FROM repository
        WHERE title = '${title}'
    `;
    let r = await con.query(sql);
    console.log(r);
    return r;
}

async function createRepository(repository) {
    const r = repositoryExists(repository.title);
    if (r.length > 0) throw Error("Post title already exists!")
    const sql = `
        INSERT INTO repository (repository_id, account_id, post_id, tag_id, category_id, title, time_stamp)
        VALUES ('${repository.repository_id}', '${repository.account_id}', '${repository.post_id}', '${repository.tag_id}', '${repository.category_id}', '${repository.title}', '${repository.time_stamp}',
        )`;

    await con.query(sql);
    const newPost = await getPost(post);
    return newPost[0];
}

async function getRepository(repository) {
    let sql;
    if (repository.repository_id) {
        sql = `SELECT * FROM repository
        WHERE repository_id = ${repository.repository_id}
        `
    } else {
        sql = `SELECT * FROM repository
        WHERE title = '${repoistory.title}'
        `
    }
    return await con.query(sql);
}

async function editRepository(repository) {
    const sql = `UPDATE repository SET
    title = '${repository.title}'
    WHERE repository_id = ${repoitory.repository_id}
    `;

    await con.query(sql);
    const newRepository = await getRepository(repository);
    return newRepository[0];
}

async function deletePost(post_id) {
    const sql = `DELETE FROM post
    WHERE post_id = ${post_id}
    `;

    await con.query(sql);
}


module.exports = { getRepositories, createRepository, getRepository, editRepository, deletePost, createTable };
// Need to export to allow access
// module.exports = { getRepositories };