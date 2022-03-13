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
};

exports.findOne = (req, res) =>{
    product.findById(req.params.productID)
.then(products => {
  if (!products) {
    return res.status(404).json({
      message: `No product found with id ${req.params.productID}`
    });
  }
  res.status(200).json(products);
})
.catch(err => {
  if (err.kind === "ObjectId") {
    res.status(404).json({
      message: `No product found with id ${req.params.productID}`
    });
  }
  res.status(500).json({
    message:
      err.message ||
      `Some error occurred while finding  the product with id ${
        req.params.productID
      }`
  });
});
}