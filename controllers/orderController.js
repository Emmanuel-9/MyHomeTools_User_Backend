const order = require('../models/order')



exports.createOrder = async (req, res) => {
    const newOrder = new order( req.body)
    try{
        const createdOrder = await newOrder.save()
        res.status(201).json(createdOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}


exports.findOrder = (req, res) => {
    order.find()
    .then((orders) => {
        res.status(201).json(orders)
    })
    .catch((err) => {
        res.status(500).json({
            message:
            err.message || "an error occurred while retrieving your orders",
        })
    })
}