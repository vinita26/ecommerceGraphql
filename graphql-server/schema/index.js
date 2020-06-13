const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        customers: [Customer],
        products: [Product]
        fetchProductById(id: String) : Product
        orders: [Order]
        fetchOrderByCustomerId(id: String): Order
    }

    type Mutation {
        registerCustomer(customer: CustomerInput): Customer,
        login(customer: LoginInput): String
        registerProduct(product: ProductInput): Product
        registerNewOrder(order: OrderInput): Order
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

    input OrderInput {
        customerId: String
        shippingAddress: String
        paymentmethod: String
        products: [OrderProductInput]
    }

    input OrderProductInput {
        productId: String
        quantity: Int
        price: Float
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

    type Order {
        id: ID
        customerId: ID
        totalOrderValue: Float
        shippingAddress: String
        paymentMethod: String
        products: [OrderProduct]
    }

    type OrderProduct {
        product: Product
        quatntity: Int
        price: Float
    }
`;

module.exports =typeDefs;