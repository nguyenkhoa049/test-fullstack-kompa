import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './graphql/resolver'
import { typeDefs } from './graphql/schema'
import * as dotenv from 'dotenv'
import { connectDB } from './config/connect-db';
import jwt from "jsonwebtoken";
dotenv.config()

async function startApolloServer() {
    const port = +process.env.PORT || 4000
    connectDB()

    const server = new ApolloServer({ typeDefs, resolvers });

    const { url } = await startStandaloneServer(server, {
        context: async ({ req }) => {
            const token = req.headers.authorization.split(' ')[1] || '';
            if(token) {
                const decoded = jwt.verify(token, process.env.SALT_HASH_PASSWORD) as jwt.JwtPayload
                return { id: decoded.id }
            }
        },
        listen: { port },
    });

    console.log(`🚀  Server ready at: ${url}`);
}

startApolloServer()