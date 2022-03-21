const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController')

//defining the routes
router.get('/:user_id', cartController.getCart);
router.post('/add/:user_id', cartController.addCart);
router.delete('/delete/:user_id', cartController.removeCart);


module.exports = router;