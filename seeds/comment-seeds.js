const { Comment } = require('../models');

const commentData = [{
        comment_text: "Hi my name is syrus im a web dev",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Im not the best web dev but im learning everyday.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "its a very slow process, but a very rewarding one! Also someone found my keys at the airport today. thank god!",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;