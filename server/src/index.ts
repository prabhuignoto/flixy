import "reflect-metadata";
import fastify from "fastify";
import { config } from "dotenv";
import { buildSchema } from "type-graphql";
import GenreResolver from './resolvers/GenreResolver';
import { ApolloServer } from "apollo-server-fastify";
import TrendingResolver from "./resolvers/TrendingResolver";
import MovieResolver from "./resolvers/MovieResolver";
import TVResolver from "./resolvers/TvResolver";
import cors from "fastify-cors";

config();

const fast = fastify({
  logger: true,
});


const server = async () => {
  try {
    const schema = await buildSchema({
      resolvers: [GenreResolver, TrendingResolver, MovieResolver, TVResolver]
    });
    const apolloServer = new ApolloServer({
      schema
    })
    fast.register(cors, {
      origin: "*"
    });
    fast.register(apolloServer.createHandler());
    fast.listen(3000);
    fast.log.info(`server running on 3000`);
  } catch (err) {
    fast.log.error(err);
  }
};

server();