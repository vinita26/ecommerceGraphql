const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
})

const registerCustomer = async (customer) => {
    try {
        const {data} = await instance.post('/customers',{
            name: customer.name,
            age: customer.age,
            email: customer.email,
            password: customer.password
        })
        return data;
    } catch (e) {
        console.error('---error registering customers--',e);
      throw e;
    }
}

const login = async (customer) => {
    try {
     const {data} = await instance.post('/login', {
         email: customer.email,
         password: customer.password
     })

     return data;
    } catch (e) {
    console.error('---error login customers--',e);
      throw e;
    }
}

const fetchCustomers = async () => {
try {
    const {data} = await instance.get('/customers');
    return data;
} catch (e) {
console.error('---error fetching customers--',e);
      throw e;
}
}



module.exports = {registerCustomer, fetchCustomers, login};