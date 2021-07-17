// Write your tests here
const server = require('./server')
const db = require('../data/dbConfig')
const supertest = require('supertest')

beforeEach(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

afterAll(async () => {
  await db.destroy()
})

test('sanity', () => {
  expect(true).toBe(true)
})

describe('users integration', () => {
     //check to see if payload contains required fields
   it("check to ensure both username and password are available on  registration", async () => {
  const res = await supertest(server).post("/api/auth/register").send({ username: 'Captain Marvel' })
  expect(res.statusCode).toBe(404)
  expect(res.type).toBe("application/json")
  expect(res.body.message).toBe("username and password required")

  const res2 = await supertest(server).post("/api/auth/register").send({ password: '' })
  expect(res2.statusCode).toBe(404)
  expect(res2.type).toBe("application/json")
  expect(res2.body.message).toBe("username and password required")

  const res3 = await supertest(server).post("/api/auth/register").send({ username: 'Captain Marvel', password: 'SuperSecretPassword' })
  expect(res3.statusCode).toBe(200)
  expect(res3.type).toBe("application/json")
  expect(res3.body.message).toBe("You've been successfully registered") 
})

      //check to see that user can successfully login
      it("check to ensure user login is successful", async () => {
        const res3 = await supertest(server).post("/api/auth/register").send({ username: 'Scott Summers', password: 'XmAN4EVAH!' })
        expect(res3.statusCode).toBe(200)
        expect(res3.type).toBe("application/json")
        expect(res3.body.message).toBe("You've been successfully registered") 
    
        const res4 = await supertest(server).post("/api/auth/login").send({ username: 'Scott Summers', password: 'XmAN4EVAH!' })
        expect(res4.statusCode).toBe(200)
        expect(res4.body.message).toBe("You've been successfully registered")
    
      })

    //       //check to see if the username is available
    // it("check to ensure username is unique prior to registration", async () => {
    //   //test duplicate username. if user exists expect 400 error "username taken"
    //   const res = await supertest(server).post("/api/auth/register").send({ username: 'Iron Man', password: 'iloveyou3000' })
    //     expect(res.statusCode).toBe(200)
    //     expect(res.type).toBe("application/json")
    //     expect(res.body.message).toBe("You've been successfully registered")
  
    //   const res2 = await supertest(server).post("/api/auth/register").send({ username: 'Iron Man', password: 'iloveyou3000' })
    //   expect(res2.statusCode).toBe(409)
    //   expect(res2.body.message).toBe("User already exists")
    // })
})
