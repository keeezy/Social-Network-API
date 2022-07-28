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
    }

}