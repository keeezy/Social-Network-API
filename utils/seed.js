const connection = require('../config/connection');
const { User } = require('../models');

// User Data
const userSeed = [
    {
        'username': 'drake',
        'email': 'drake@gmail.com',
    },
    {
        'username': 'giveon',
        'email': 'giveon@gmail.com',
    },
    {
        'username': 'blxst',
        'email': 'blxst@gmail.com',
    },
    {
        'username': 'theweekend',
        'email': 'theweekend@gmail.com',
    },
];

// Thought Data




// Reaction Data


connection.once('open', async () => {
    await User.deleteMany({})

    await User.collection.insertMany(userSeed);
    console.log('SUCCESSFULLY SEEDED USERS');

    process.exit(0);
})


