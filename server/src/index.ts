import { ApolloServer } from "apollo-server-fastify";
import { config } from "dotenv";
import fastify from "fastify";
import cors from "fastify-cors";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import GenreResolver from './resolvers/GenreResolver';
import MovieResolver from "./resolvers/MovieResolver";
import TrendingResolver from "./resolvers/TrendingResolver";
import TVResolver from "./resolvers/TVResolver";

if (process.env.NODE_ENV === "prod") {
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
      playground: process.env.NODE_ENV === "prod" ? false : true
    })

    fast.register(cors, {
      origin: "*",
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