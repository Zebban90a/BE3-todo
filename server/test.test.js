const request = require('supertest');
require("dotenv").config()

const app = require("./app");
const router = require("./routes/users")

const userInfo = {
    username: process.env.USERNAME,
}


describe("Post user/login", () => {
    test("Test validation if the user does not put in both a username anad a password", async () => {
        const response = await request(app).post("/users/login").send(userInfo);
        expect(response.statusCode).toBe(401);
    })


    test("Test that the logout route returns status 200", async () => {
        const response = await request(app).get("/users/logout");
        expect(response.statusCode).toBe(200);
    })
})



//////////////////////// MOCHA ////////////////////////

// describe('Todo REST API routes', () => {
//     describe('Sending a POST request with correct username and password to /users/login', () => {
//         it('should respond with 200 and return json.', (done) => {
//             request(app)
//                 .post('/users/login')
//                 .send(username = "Anna", password = "123")
//                 // .expect('Content-Type', /json/)
//                 .expect(200, done);
//         });
//     })
// })