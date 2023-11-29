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