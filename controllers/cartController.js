const CartModel = require("../models/cartModel");
const product = require("../models/product");


//get cart by product id
// Get Cart Id from JSON response
exports.getCart = (req, res, next) => {
    try{
      const product = req.query;
      const product_id = req.query;
    }
         if (!product) {
          res.status(404).send("Invalid Request");
          return next(error);
        }
         CartModel.findById(req.params.product_id)
          .then((Cart) => res.json(Cart))
          .catch((err) => {
            const error = new APIError(err.message, httpStatus.INTERNAL_SERVER_ERROR, true);
            return next(error);
          });
      
};

//adding to cart
exports.addCart = (req, res) => {
 try {
    const { product_id, user_id, products, total } = req.body;
    const productObject = await.ProductModel.findById(
       req.params.product_id
    );

    // checking if the product exists
    if (!productObject) {
      res.status(404).json({message: 'Product not found'});
      return;
    }
    //if the cart exists
    const cartObject = await.cartModel.findById(req.params,user_id);

    if (cartObject) {
      const productIndex = cartModel.products.findIndex(
        (product) => product.product_id === product_id
      );
      //if the products exist
      if (productIndex > -1) {
          res.json({message:'product already exists in the cart'});
        // let item = cart.products[productIndex];
        // item.quantity += quantity;
      }
      else{
          const newCart = await CartModel.create(
              cartModel.products.product_id
          )
         
      }
    }
  } catch (error) {
    console.log(error);
  };
};

exports.editCart = (req, res) => {
  try {
    const { product_id, user_id, created_at, quantity } = req.body;
  } catch (error) {
    console.log(error);
  }
};


// // deleting an item from cart
exports.deleteCart ( async (req, res) => {
  try {
    const delete_id = await product.findByIdAndDelete ({_id: req.params.id})
    if (!delete_id) {
      res.status(404).send ({error: "Product not found"})
    }
    res.send (delete_id)
      }
      catch (error){
        res.status(400).send(error)
      }
 

//update an item in cart and an item in cart

exports.updateCart =  ('product'(req, res)) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'description', 'category', 'price']

  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if(!isValidOperation) {
      return res.status(400).send({ error: 'invalid updates'})
  }

  try {
      const product = await product.findById({ _id: req.params.id})
  
      if(!product){
          return res.status(404).send()
      }

      updates.forEach((update) => product[update] = req.body[update])
      await product.save()
      res.send(product)
  } catch (error) {
      res.status(400).send(error)
  }
});


