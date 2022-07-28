const { User, Thought } = require('../models');

module.exports = {
    // GET /api/thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.json({ message: 'Error getting all thoughts!!!', err });
        }
    },

    // GET /api/thoughts/:id
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.id});
            if (!thought) {
                return res.json({ message: 'No thought found with this ID!!!', err });
            }
            res.json(thought);
        } catch (err) {
            res.json({ message: 'Error getting single thought!!! ', err });
        }
    },

    // POST /api/thoughts/:id
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            await User.findOneAndUpdate({_id: req.params.id}, {$push: {thoughts: thought._id}});
            res.json(thought);
        } catch (err) {
            res.json({ message: 'Error creating thought!!!', err });
        }
    },

    // PUT /api/thoughts/:id
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true});
            if (!thought) {
                return res.json({ message: 'No thought found with this ID!!!', err });
            }
            res.json(thought);
        } catch (err) {
            res.json({ message: 'Error updating thought!!!', err });
        }
    },

    // DELETE /api/thoughts/:id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({_id: req.params.id});
            if (!thought) {
                return res.json({ message: 'No thought found with this ID!!!', err });
            }
            res.json(thought);
        } catch (err) {
            res.json({ message: 'Error deleting thought!!!', err });
        }
    }

}