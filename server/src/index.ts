import "reflect-metadata";
import fastify from "fastify";
import { config } from "dotenv";
import { buildSchema } from "type-graphql";
import GenreResolver from './resolvers/GenreResolver';
import { ApolloServer } from "apollo-server-fastify";
import TrendingResolver from "./resolvers/TrendingResolver";
import MovieResolver from "./resolvers/MovieResolver";
import TVResolver from "./resolvers/TVResolver";
import cors from "fastify-cors";

if(process.env.NODE_ENV === "production") {
  require("newrelic");
}

config();


const fast = fastify({
  logger: true,
});


const server = async () => {
  try {
    // build schema
    const schema = await buildSchema({
      resolvers: [GenreResolver, TrendingResolver, MovieResolver, TVResolver]
    });

    // start apollo server
    const apolloServer = new ApolloServer({
      schema,
      playground: process.env.NODE_ENV === "production" ? false : true
    })

    fast.register(cors, {
      origin: process.env.NODE_ENV === "production" ? "prabhumurthy.com" : "*"
    });
    fast.register(apolloServer.createHandler());

    // start the server
    fast.listen(3200);
    fast.log.info(`server running on 3000`);
  } catch (err) {
    fast.log.error(err);
  }
};

server();