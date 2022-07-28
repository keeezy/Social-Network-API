const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

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
const thoughtSeed = [
    {
        'thoughtText': 'You da you da best, best I ever had',
        'username': 'drake',
    },
    {
        'thoughtText': 'Ballons are deflated, Guess they look lifeless like me',
        'username': 'giveon',
    },
    {
        'thoughtText': 'My lil baby she too boujee, brand new',
        'username': 'blxst',
    },
    {
        'thoughtText': 'Save your tears for another daaaaaaay',
        'username': 'theweekend',
    },
]



// Reaction Data


connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({})

    await User.collection.insertMany(userSeed);
    console.log('SUCCESSFULLY SEEDED USERS');

    await Thought.collection.insertMany(thoughtSeed);
    console.log('SUCCESSFULLY SEEDED THOUGHTS');

    process.exit(0);
})


