
const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller');

//TODO - ROUTE THAT GETS ALL THE USERS, include friends?
router.get('/', getAllUsers);

//TODO - ROUTE THAT CREATES A NEW USER
router.post('/', createUser);

//TODO - ROUTE THAT GETS A SINGLE USER BASED ON USER ID
router.get('/:id', getUserById);

//TODO - ROUTE THAT UPDATES A SINGLE USER
router.put('/:id', updateUser);

//TODO - ROUTE THAT DELETES A SINGLE USER BASED ON USER ID
router.delete('/:id', deleteUser);

//TODO - ROUTE THAT ADDS A FRIEND TO A USER
router.post('/:id/friends/:friendId', addFriend);

//TODO - ROUTE THAT DELETES A FRIEND FROM A USER'S FRIENDS, DONT DELETE THE FRIEND AS A USER THOUGH!
router.delete('/:id/friends/:friendId', removeFriend);

module.exports = router;
