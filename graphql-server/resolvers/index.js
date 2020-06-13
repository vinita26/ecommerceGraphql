const {registerCustomer, fetchCustomers, login} = require('../customers');
const {registerProduct,fetchAllProducts,fetchProductById} = require('../products');
const resolvers = {
    Query: {
        customers: (parent, args, context) => {
            const {me} = context;
            console.log('---me----',me);
            
          const customers =   fetchCustomers();
          return customers;
        },
        products: () => {
            const products = fetchAllProducts();
            return products;
        },
        fetchProductById: (parent, {id}) => {
            const product = fetchProductById(id);
            return product;
        }
    },
    Mutation: {
        registerCustomer: async (parent, args) => {
            const customer = await registerCustomer(args.customer);
            return customer;
        },
        login: async (parent, args) => {
            const token = await login(args.customer);
            return token;
        },
        registerProduct: async (parent, args) => {
            const product = await registerProduct(args.product);
            return product;
        },
    },
    
}

module.exports = resolvers;