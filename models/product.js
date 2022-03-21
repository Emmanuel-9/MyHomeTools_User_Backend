const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
//ObjectID is a unique id for every document created in Mongo
//we need to link every item created with the user who created it 

const ProductSchema = new Schema({
   product_name:{
       type: String,
       required: true

   } ,
   description:{
       type: String,
       required: true
   },
   category: {
       type: String,
       required: true
   },
   price: {
        type: Number,
        required: true
   },

quantity: {
    type: Number,
    required: true

},
image: {
    type: String,
    required: true

},

discount:{
    type: Number,
    required: true  

},
date_added:{
type: Date,
default:Date.now
},

});

module.exports = mongoose.model('product', ProductSchema)