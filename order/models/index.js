const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const OrderProductSchema = new Schema({
    productId: String,
    quantity: Number,
    price: Number
})

const OrderSchema = new Schema({
    customerId: Number,
    totalOrderValue: Number,
    shippingAddress: String,
    paymentMethod: String,
    productInfo: [OrderProductSchema]
})


OrderSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

OrderSchema.set('toJSON', {
    virtuals: true
})

const Order = mongoose.model('orders', OrderSchema);

module.exports = Order;