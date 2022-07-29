const { User, Reaction, Thought } = require('../models');

module.exports = {
    //POST /api/thoughts/:thoughtId/reactions
    async createReaction(req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $push: { reactions: req.body } }, { new: true });
            if (!reaction) {
                return res.json({ message: 'No reaction found with this ID!!!', err });
            }
            res.json(reaction);
        } catch (err) {
            res.json({ message: 'Error creating reaction!!!', err });
        }

    },

    //DELETE /api/thoughts/:thoughtId/reactions/:reactionId
    async deleteReaction(req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { _id: req.params.reactionId } } }, { new: true });
            if (!reaction) {
                return res.json({ message: 'No reaction found with this ID!!!', err });
            }
            res.json(reaction);
        } catch (err) {
            res.json({ message: 'Error deleting reaction!!!', err });
        }
    }
}