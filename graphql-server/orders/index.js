const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3300/'
})

const registerOrder = async (customer) => {
    try {
        const {data} = await instance.post('/orders',{
            name: customer.name,
            age: customer.age,
            email: customer.email,
            password: customer.password
        })
        return data;
    } catch (e) {
        console.error('---error registering orders--',e);
      throw e;
    }
}

const fetchOrders = async () => {
try {
    const {data} = await instance.get('/orders');
    return data;
} catch (e) {
console.error('---error fetching orders--',e);
      throw e;
}
}

const fetchOrderByCustomerId = async (id) => {
    try {
        const {data} = await instance.get(`/orders/customers/${id}`);
        return data;
    } catch (e) {
    console.error('---error fetching orders by customer ID--',e);
          throw e;
    }
    }



module.exports = {registerOrder, fetchOrders, fetchOrderByCustomerId};