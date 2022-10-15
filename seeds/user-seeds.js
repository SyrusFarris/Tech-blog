const { User } = require('../models');

const userData = [{
        username: 'Syrus',
        password: 'Syrus'

    },
    {
        username: 'Samson',
        password: 'Samson'
    },
    {
        username: 'Maxine',
        password: 'Maxine'
    }
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;