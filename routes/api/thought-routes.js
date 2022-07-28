
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controller');

//TODO: ROUTE TO GET ALL THOUGHTS
router.get('/', getAllThoughts);

//TODO: ROUTE TO CREATE A NEW THOUGHT
router.post('/', createThought);

//TODO: ROUTE TO GET SINGLE THOUGHT BASED ON THOUGHT ID
router.get('/:id', getThoughtById);

//TODO: ROUTE TO UPDATE A THOUGHT
router.put('/:id', updateThought);

//TODO: ROUTE TO DELETE A THOUGHT BASED ON THOUGHT ID
router.delete('/:id', deleteThought);

//TODO: ROUTE TO ADD REACTION TO A THOUGHT
router.post('/:thoughtId/reactions', (req,res)=> {

});

//TODO: ROUTE TO DELETE A REACTION ON A THOUGHT
router.delete('/:thoughtId/reactions/:reactionId', (req,res)=> {

})

module.exports = router;
