const request = require('supertest');
require("dotenv").config()

const app = require("./app");

const userInfo = {
    username: process.env.USERNAME,
}


describe("Post user/login", () => {
    test("Test validation if the user does not put in both a username anad a password", async () => {
        const response = await request(app).post("/users/login").send(userInfo);
        expect(response.statusCode).toBe(400);
    })


    test("Test that the logout route returns status 200", async () => {
        const response = await request(app).get("/users/logout");
        expect(response.statusCode).toBe(200);
    })
})


