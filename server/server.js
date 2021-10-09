const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth')
// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
// create a new Apollo server and pass in our schema data
let server = null;


async function startServer() {
    server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware 
      });
      await server.start();
      server.applyMiddleware({ app });
    }

startServer()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})



db.once('open', () => {
  app.listen(process.env.PORT || 3001, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});