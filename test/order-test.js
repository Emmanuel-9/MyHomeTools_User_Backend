let chai = require("chai")
const { faker } = require('@faker-js/faker')
let chaiHttp = require('chai-http')
let server = require("../index")
const { createOrder, findOrder } = require("../controllers/orderController")
const { expect } = require("chai")
let should = chai.should()
chai.use(chaiHttp)


describe('Orders', () => {
    it('has all the required functions', (done) => {
        expect( createOrder).to.exist
        expect( findOrder).to.exist

        done()
    })
})

describe("Create orders", () => {
    it("should create a new order", (done) => {
        let order = {
            user_id: 1,
            status: "Pending",
            products: [
                {
                    product_id: 1,
                    quantity: 5,
                    price: 4600,
                    discount: 400
                },
            ],
            delivery_address: [
                {
                    name: "Mikocheni",
                    delivery_phone_number: 3456789,
                    city: "Dares Salaam",
                    more_info: "Tanzania"
                },
            ],
            payment_details: [
                {
                    payment_phone_number: "4567890",
                },
            ],
            total: 5600,
            timestamps: true
        }
        chai.request(server)
        .post("/orders")
        .send(order)
        .end((err, res) => {
            res.should.have.status(201)
            res.body.should.be.a('object')
            console.log(res.body)
            done()
        })
    })
})

describe("/GET orders", () => {
    it("it should GET all the orders", (done) => {
        chai.request(server)
        .get("/orders/find")
        .end((err, res) => {
            res.should.have.status(201)
            res.body.should.be.a("array")
            done()
        })
    })
})

after(() => {})