const app = require('./index.js');
const supertest = require('supertest');
const request = supertest(app);
const db = require('../database/index.js');

describe('Test GET api/repos endpoint', () => {
    it('It should respond with 200', async done => {
        const res = await request.get('/api/repos');

        expect(res.status).toBe(200);
        done();
    });

    it('It should respond with an array of only 25 repos', async done => {
        const res = await request.get('/api/repos');
        const resRepos = JSON.parse(res.text);
        
        expect(resRepos.length).toBe(25)
        done();
    });
});

describe('Test POST api/repos endpoint', () => {
    it('It should respond with 201', async done => {
        const res = await request.post('/api/repos');

        expect(res.status).toBe(201);
        done();
    });
})
