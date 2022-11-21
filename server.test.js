const request = require("supertest");
const app = require("./routes/User");
const mongoose = require("mongoose");

describe("Test the root path",()=>{
    test("it should response the GET method",()=>{
        const response = request(app).post("https://localhost:8080/user/add").send({
            "Name" : "Supi",
            "Email" : "i202361@nu.edu.pk",
            "Age" : 20,
            "Contact": 200
        })
        expect(response.statusCode).toBe(200);
    })

})


describe("Test the Add path 2",()=>{
    test("It should response the get method",()=>{
        const response=request(app).post("https://localhost:8080/user/delete"
        ).send({
            "Name":"umiar",
            "Contact": 200
        })
        expect(response.statusCode).toBe(200);
    })
})

describe("Test the Delete path 3",()=>{
    test("It should response the get method",()=>{
        const response=request(app).post("https://localhost:8080/user/add"
        ).send({
            "Name":"umair"
            })
        expect(response.statusCode).toBe(200);
    })
})