const Product = require('../models');

const registerProduct = async (req, res) => {
    const {name, category, price} = req.body;
    console.log("req.boby",req.body);
    
    try {

       // mongoose model
       const newProduct = new Product({
           name,
           category,
           price
       })
       const product = await newProduct.save();
       res.status(201).send(product);
    } catch (e) {
      console.error('---Error registering product ----',e);
      res.status(500).send({message: 'Error registering new product'});
    }
}


const fetchAllProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).send(products);
    } catch (e) {
    console.error('---Error fetching products ----',e);
      res.status(500).send({message: 'Error fetching product informations'});
    }
}

const fetchProductById = async (req,res) => {
    const id = req.params.id;
try {
        const product = await Product.findOne({_id: id});
        res.status(200).send(product);
    } catch (e) {
    console.error('---Error fetching products specific ----',e);
      res.status(500).send({message: 'Error fetching specific product informations'});
    }
}
module.exports = {registerProduct,fetchAllProducts,fetchProductById};