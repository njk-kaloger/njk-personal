import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import express from "express";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());
const httpServer = http.createServer(app);


const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
    Query: {
        hello: () => "world",
    },
};

const startApolloServer = async (app, httpServer) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();
    server.applyMiddleware({ app });
}


startApolloServer(app, httpServer);

export default httpServer;

// // A schema is a collection of type definitions (hence "typeDefs")
// // that together define the "shape" of queries that are executed against
// // your data.
// const typeDefs = gql`
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;

// const books = [
//     {
//         title: 'The Awakening',
//         author: 'Kate Chopin',
//     },
//     {
//         title: 'City of Glass',
//         author: 'Paul Auster',
//     },
// ];

// const resolvers = {
//     Query: {
//         books: () => books,
//     },
// };

// const {
//     ApolloServerPluginLandingPageLocalDefault
// } = require('apollo-server-core');

// // The ApolloServer constructor requires two parameters: your schema
// // definition and your set of resolvers.
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     csrfPrevention: true,
//     cache: 'bounded',
//     /**
//      * What's up with this embed: true option?
//      * These are our recommended settings for using AS;
//      * they aren't the defaults in AS3 for backwards-compatibility reasons but
//      * will be the defaults in AS4. For production environments, use
//      * ApolloServerPluginLandingPageProductionDefault instead.
//     **/
//     plugins: [
//         ApolloServerPluginLandingPageLocalDefault({ embed: true }),
//     ],
// });

// // The `listen` method launches a web server.
// server.listen({ port: 4000 }).then(({ url }) => {
//     console.log(`
//       🚀  Server is ready at ${url}
//       📭  Query at https://studio.apollographql.com/dev
//     `);
// });