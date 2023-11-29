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