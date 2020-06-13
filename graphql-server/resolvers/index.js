const {registerCustomer, fetchCustomers, login} = require('../customers')
const resolvers = {
    Query: {
        customers: (parent, args, context) => {
            const {me} = context;
            console.log('---me----',me);
            
          const customers =   fetchCustomers();
          return customers;
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
        }
    },
    
}

module.exports = resolvers;