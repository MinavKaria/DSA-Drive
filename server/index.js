import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';
import typeDefs from './configs/typeDefs.js';
import resolvers from './configs/resolvers.js';
import { startStandaloneServer } from '@apollo/server/standalone';
import { expressMiddleware } from '@apollo/server/express4';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

async function startServer()
{
    const app=express();
    const server=new ApolloServer({
        typeDefs,
        resolvers
    });

    dotenv.config();

    try
    {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    }
    catch(err)
    {
        console.log(err);
    }

    await server.start();
    
    app.use(cors());
    app.use(bodyParser.json());
  

    app.use('/graphql', expressMiddleware(server));

    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
    });
}

startServer();