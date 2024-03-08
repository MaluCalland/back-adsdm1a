const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test("Deve retornar 200 no GET /", async function(){
    const resposta = await request.get("/");
    expect(resposta.status).toBe(200);
});