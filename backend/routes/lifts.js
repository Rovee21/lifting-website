//importing express and the controller functions
const express = require('express');
const { getLifts, addLift } = require('../controllers/liftController');

//creating the express router object
const router = express.Router();

//route to get the lifts
router.get('/', getLifts);

//route to add a lift
router.post('/', addLift);

//exporting the router so it can be used in the other parts of the application
module.exports = router;