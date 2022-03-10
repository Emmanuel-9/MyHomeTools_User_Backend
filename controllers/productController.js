const product = require ('../models/product');

let productss = [
    {
    product_name: "heater",
    description: "large",
    category: "kitchen",
    price : "5000",
    quantity : "5",
    image : "test",
    discount: "450",
    },

]
//get all items from database 
exports.findAll = (req,res) => {
    product.find()
    
    .then(products => {
        res.status(200).json(products);
    })
    .catch (err => {
        res.status(500).json({
            message:
            err.message || "an error occcured while retrieving your products"
        });
    });
}