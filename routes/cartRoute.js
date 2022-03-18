const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController')

//defining the routes
router.get('/get', cartController.getCart);
router.post('/add', cartController.addCart);
router.put('/update', cartController.editCart);
router.delete('/delete', cartController.deleteCart);

module.exports = router;