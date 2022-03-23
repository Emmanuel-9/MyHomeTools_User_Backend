const Cart = require("../models/cartModel");



exports.getCart = (req, res) => {
    Cart.findById(req.params.user_id)
    .then((cart) =>{
        if(!cart){
            res.status(404).json({
                message: `No cart found with id ${req.params.user_id}`,
            })
            res.status(200).json(cart)
        }
    })
    .catch((err) => {
        if(err.kind === "ObjectId"){
            res.status(404).json({
                message:`No cart found with id ${req.params.user_id}`,
            })
        }
        res.status(500).json({
            message:
            err.message ||
            `Some error occurred while finding the cart with id ${req.params.user_id}`,
        })
    })
}

exports.addCart  = (req,res) => {
    Cart.findByIdAndUpdate(req.params.user_id)
    .then((cart) => {
            res.status(200).json(cart)
    })
    .catch((err) => {
        if(err.kind === "ObjectId"){
            res.status(404).json({
                message:`Cannot add from cart with id ${req.params.user_id}`,
            })
        }
        res.status(500).json({
            message:
            err.message ||
            `Some error occurred while finding the cart with id ${req.params.user_id}`,
        })
    })
    
}

exports.removeCart  = (req,res) => {
    Cart.findByIdAndRemove(req.params.user_id)
    .then((cart) => {
            res.status(200).json(cart)
    })
    .catch((err) => {
        if(err.kind === "ObjectId"){
            res.status(404).json({
                message:`Cannot delete from cart with id ${req.params.user_id}`,
            })
        }
        res.status(500).json({
            message:
            err.message ||
            `Some error occurred while finding the cart with id ${req.params.user_id}`,
        })
    })
    
}
