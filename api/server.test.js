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
  expect(res.body.message).toBe("Missing username or password")

  const res2 = await supertest(server).post("/api/auth/register").send({ password: '' })
  expect(res2.statusCode).toBe(404)
  expect(res2.type).toBe("application/json")
  expect(res2.body.message).toBe("Missing username or password")

  const res3 = await supertest(server).post("/api/auth/register").send({ username: 'Captain Marvel', password: 'SuperSecretPassword' })
  expect(res3.statusCode).toBe(200)
  expect(res3.type).toBe("application/json")
  expect(res3.body.message).toBe("You've been successfully registered") 

})

})
