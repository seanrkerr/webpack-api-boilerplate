//call it like http://localhost:3000/hello?query={hello}

//straight from the apollo docs
const { ApolloServer, gql } = require("apollo-server-lambda");
import { typeDefs } from "./hello.schema.js";
import { resolvers } from "./hello.resolver.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  })
});

exports.hello = server.createHandler({
  cors: {
    origin: true,
    credentials: true
  }
});
