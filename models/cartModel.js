const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the schema for cart
const CartSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
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
      },
    ],
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", CartSchema);
