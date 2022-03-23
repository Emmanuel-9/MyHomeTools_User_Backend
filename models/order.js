const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    user_id:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    products: [
        {
            product_id: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            discount: {
                type: Number,
                required: true,
            },
        },
    ],
    delivery_address: [
        {
            name: String,
            delivery_phone_number: Number,
            city: String,
            more_info: String,
        },
    ],
    payment_details: [
        {
            payment_phone_number: String,
        },
    ],
    total: String
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('order', orderSchema )