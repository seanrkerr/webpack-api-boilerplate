const chai = require("chai");

const expect = chai.expect;
const url = `http://localhost:3000/`;
const request = require("supertest")(url);

describe("Hello endpoint", () => {
  it("sh", done => {
    request
      .get("hello?query={hello}")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data).to.have.property("hello");
        done();
      });
  });
});
