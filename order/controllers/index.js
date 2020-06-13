const Order = require('../models');

const registerNewOrder = async (req, res) => {
    const {customerId, totalOrderValue, shippingAddress, paymentMethod,productInfo} = req.body;
    try {
       // mongoose model
       const newOrder = new Order({
            customerId,
            totalOrderValue,
            shippingAddress,
            paymentMethod,
            productInfo
       })
       const order = await newOrder.save();
       res.status(201).send(order);
    } catch (e) {
      console.error('---Error registering order ----',e);
      res.status(500).send({message: 'Error registering new order'});
    }
}


const fetchAllOrders = async (req,res) => {
    try {
        const orders = await Order.find({});
        res.status(200).send(orders);
    } catch (e) {
    console.error('---Error fetching orders ----',e);
      res.status(500).send({message: 'Error fetching order informations'});
    }
}

const fetchOrderByCustomerId = async (req,res) => {
    const id = req.params.id;
try {
        const order = await Order.findOne({customerId: id});
        res.status(200).send(order);
    } catch (e) {
    console.error('---Error fetching orders specific ----',e);
      res.status(500).send({message: 'Error fetching specific order informations'});
    }
}
module.exports = {registerNewOrder,fetchAllOrders,fetchOrderByCustomerId};