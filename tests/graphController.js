const asyncReq = require("graphql");
const schema = require("./testSchema").default;

module.exports = {
  asyncReq: async (req, res) => {
    try {
      const result = await asyncReq(schema, req.body.query, req);
      if (result.errors) throw result.errors;
      return res.ok(result);
    } catch (err) {
      return res.badRequest(err);
    }
  }
};
