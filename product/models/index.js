const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    category: String,
    price: {type: Number,required: true}
})


ProductSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

ProductSchema.set('toJSON', {
    virtuals: true
})

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;