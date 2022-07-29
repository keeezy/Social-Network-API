const { User, Reaction, Thought } = require('../models');

module.exports = {
    //POST /api/thoughts/:thoughtId/reactions
    async createReaction(req, res) {
        try {
            const reaction = await Reaction.create(req.body);

            const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $push: { reactions: reaction } }, { new: true });
            if (!thought) {
                return res.json({ message: 'No reaction found with this ID!!!'});
            }
            res.json({ message: 'Reaction created successfully!!!' });
        } catch (err) {
            res.json({ message: 'Error creating reaction!!!', err });
        }

    },

    //DELETE /api/thoughts/:thoughtId/reactions/:reactionId
    async deleteReaction(req, res) {
        try {
            const reaction = await Reaction.findOneAndDelete({ _id: req.params.reactionId });
            
            const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { _id: req.params.reactionId } } }, { new: true });
            if (!thought) {
                return res.json({ message: 'No reaction found with this ID!!!'});
            }
            res.json({ message: 'Reaction deleted successfully!!!' });
        } catch (err) {
            res.json({ message: 'Error deleting reaction!!!', err });
        }
    },

}