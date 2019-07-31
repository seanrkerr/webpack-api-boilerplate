const graphql = require("graphql");
const HelloType = require("./testHelloQuery").default;

export default {
  hello: {
    description: "Returns information about user/s",
    type: new graphql.GraphQLString(HelloType),
    resolve: async () => {
      return hello;
    }
  }
};
