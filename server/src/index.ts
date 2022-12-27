import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './graphql/resolver'
import { typeDefs } from './graphql/schema'
import mongoose, { ConnectOptions } from 'mongoose';
import * as dotenv from 'dotenv'
import { connectDB } from './config/connect-db';
dotenv.config()

async function startApolloServer() {
    const port = +process.env.PORT || 4000
    connectDB()

    const server = new ApolloServer({ typeDefs, resolvers });

    const { url } = await startStandaloneServer(server, {
        listen: { port },
    });

    console.log(`🚀  Server ready at: ${url}`);
}

startApolloServer()