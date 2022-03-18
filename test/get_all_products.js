const assert = require("assert");
const { expect } = require("chai");
// const product = require("../controllers/productController");

var product = require ("../models/product");

var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../index");
// const res = require('express/lib/response');
var should = chai.should();

chai.use(chaiHttp);

describe("/GET all products", () => {
  it("should GET all products from database", (done) => {
    chai
      .request(server)
      .get("/product")
      .end((err, res) => {
        // res.should.have.status(200);
        // res.should.be.json;
        res.body.should.be.a("object");
        done();
      });
      
      
  });
});
