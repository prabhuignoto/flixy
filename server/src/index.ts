import "reflect-metadata";
import fastify from "fastify";
import { config } from "dotenv";
import { buildSchema } from "type-graphql";
import GenreResolver from './resolvers/GenreResolver';
import { ApolloServer } from "apollo-server-fastify";
import TrendingResolver from "./resolvers/TrendingResolver";
import MovieResolver from "./resolvers/MovieResolver";
import TVResolver from "./resolvers/TvResolver";

config();

const fast = fastify({
  logger: false
});

const server = async () => {
  try {
    const schema = await buildSchema({
      resolvers: [GenreResolver, TrendingResolver, MovieResolver, TVResolver]
    });
    const apolloServer = new ApolloServer({
      schema
    })
    fast.register(apolloServer.createHandler());
    fast.listen(3200);
    fast.log.info(`server running on 4000`);
  } catch (err) {
    fast.log.error(err);
  }
};

server();