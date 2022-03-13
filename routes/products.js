const { Router } = require('express');
const productController = require('../controllers/productController');
const router = Router();

router.get('/all', productController.findAll);
router.get("/:productID", productController.findOne);

module.exports = router;