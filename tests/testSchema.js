const graphql = require("graphql");
const HelloQuery = require("./testHelloQuery");

export default new graphql.GraphQLSchema({
  name: "Query",
  fields: HelloQuery
});
