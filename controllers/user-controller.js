const { User, Thought } = require('../models');

module.exports = {

    // GET /api/users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(400).json({ message: 'Error getting all users!!!', err });
        }
    },

    // GET /api/users/:id
    async getUserById(req, res) {
        try {
            const user = await User.findOne({_id: req.params.id});
            if (!user) {
                return res.status(400).json({ message: 'No user found with this ID!!!'});
            }
            res.json(user);
        } catch (err) {
            res.status(400).json({ message: 'Error getting single user!!! ', err });
        }
    },

    // POST /api/users
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(400).json({ message: 'Error creating user!!!', err });
        }
    },

    // PUT /api/users/:id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true});
            if (!user) {
                return res.status(400).json({ message: 'No user found with this ID!!!'});
            }
            res.json(user);
        } catch (err) {
            res.status(400).json({ message: 'Error updating user!!!', err });
        }
    },

    // DELETE /api/users/:id
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({_id: req.params.id});
            if (!user) {
                return res.status(400).json({ message: 'No user found with this ID!!!'});
            }
            res.json(user);
        } catch (err) {
            res.status(400).json({ message: 'Error deleting user!!!', err });
        }
    },

    // POST /api/users/:userID/friends/:friendID
    async addFriend(req, res) {
        try {
            const user = await User.findByIdAndUpdate({_id: req.params.id}, {$push: {friends: req.params.friendId}});
            if (!user) {
                return res.status(400).json({ message: 'No user found with this ID!!!'});
            }

            const friend = await User.findByIdAndUpdate({_id: req.params.friendId}, {$push: {friends: req.params.friendId}});
            if (!friend) {
                return res.status(400).json({ message: 'No friend found with this ID!!!', err });
            }
            res.json({ message: 'Added a new friend :) !!!'});
        } catch (err) {
            res.status(400).json({ message: 'Error adding friend!!!', err });
        }
    },

    // DELETE /api/users/:userID/friends/:friendID
    async removeFriend(req, res) {
        try {
            const user = await User.findByIdAndUpdate({_id: req.params.id}, {$pull: {friends: req.params.friendId}});
            if (!user) {
                return res.status(400).json({ message: 'No user found with this ID!!!'});
            }

            const friend = await User.findByIdAndUpdate({_id: req.params.id}, {$pull: {friends: req.params.friendId}});
            if (!friend) {
                return res.json({ message: 'No friend found with this ID!!!'});
            }
            res.json({ message: 'Lost a friend :( !!!'});
        } catch (err) {
            res.status(400).json({ message: 'Error removing friend!!!', err });
        }
    }











}