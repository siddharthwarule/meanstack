const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  product_type: {
    type: String,
  },
 product_catagery:{
  type:String,
 },

 product_price_renge:{
   type:Number,    
 },

});

const product = mongoose.model("product", productSchema);

module.exports = product;