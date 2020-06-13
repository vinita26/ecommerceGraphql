const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        customers: [Customer],
        products: [Product]
        fetchProductById(id: String) : Product
    }

    type Mutation {
        registerCustomer(customer: CustomerInput): Customer,
        login(customer: LoginInput): String
        registerProduct(product: ProductInput): Product
    }

    

    input CustomerInput {
        name: String
        address: String
        password: String
        email: String
    }

    input LoginInput {
        email: String
        password: String
    }

    input ProductInput {
        name: String
        category: String
        price: Float!
    }

    type Customer {
        id: ID
        name: String
        email: String
        address: String
    }

    type Product {
        id: ID
        name: String
        category: String
        price: Float!
    }
`;

module.exports =typeDefs;