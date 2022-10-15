const { Post } = require('../models');

const postData = [{
        title: 'FrontEnd',
        content: 'The visual part of web development, or what users interact with',
        user_id: 1

    },
    {
        title: 'BackEnd',
        content: 'The part of web applications user cant see. the fun stuff.',
        user_id: 2
    },
    {
        title: 'Full Stack',
        content: 'The Lebrons of Web Development',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;