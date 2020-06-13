const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const jwt = require('jsonwebtoken');

const getLoggedInCustomer = (req) => {
    const token = req.headers['x-auth-token'];
    if (token) {
        try{
            return jwt.verify(token, process.env.JWT_SECRET);
        }catch(e){
            throw new Error('Invalid token');
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({req}) => ({
        me: getLoggedInCustomer(req)
    })
})

module.exports = server;