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