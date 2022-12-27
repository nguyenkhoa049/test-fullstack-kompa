import express from 'express'
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './graphql/resolver'
import { typeDefs } from './graphql/schema'
import mongoose from 'mongoose';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

async function startApolloServer() {
    const app = express()
    const port = 4000
    mongoose.set('strictQuery', true);

    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Connected!'))
        .catch((err) => console.log(err));

    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start()
    server.applyMiddleware({ app });

    app.listen({ port }, () =>
        console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
    );

}

startApolloServer()