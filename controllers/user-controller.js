const { User, Thought } = require('../models');

module.exports = {

    // GET /api/users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.json({ message: 'Error getting all users!!!', err });
        }
    },

    // GET /api/users/:id
    async getUserById(req, res) {
        try {
            const user = await User.findOne({_id: req.params.id});
            if (!user) {
                return res.json({ message: 'No user found with this ID!!!', err });
            }
            res.json(user);
        } catch (err) {
            res.json({ message: 'Error getting single user!!! ', err });
        }
    }










}