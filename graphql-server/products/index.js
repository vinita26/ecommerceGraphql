const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3200/'
})

const registerProduct = async (product) => {
    try {
        const {data} = await instance.post('/products',{
            name: product.name,
            category: product.category,
            price: product.price
        })
        return data;
    } catch (e) {
        console.error('---error registering products--',e);
      throw e;
    }
}


const fetchAllProducts = async () => {
try {
    const {data} = await instance.get('/products');
    return data;
} catch (e) {
console.error('---error fetching products--',e);
      throw e;
}
}

const fetchProductById = async (id) => {
    try {
        const {data} = await instance.get(`/products/${id}`);
        return data;
    } catch (e) {
    console.error('---error fetching products by ID--',e);
          throw e;
    }
    }



module.exports = {registerProduct, fetchAllProducts,fetchProductById};