const app = require('./index.js');
const supertest = require('supertest');
const request = supertest(app);

describe('Init Jest Test', function() {
    // Test should not pass because 1 !== 2
    it('Testing to see if Jest works', () => {
        expect(1).not.toBe(2);
    });

    // Test should pass because 2 === 2
    it('Testing to see if Jest works', () => {
        expect(2).toBe(2);
    });
});

describe('Test GET api/repos endpoint', () => {
    it('It should response with 200', async done => {
        const res = await request.get('/api/repos');

        expect(res.status).toBe(200);
        done();
    });

    it('It should response with an array of only 25 repos', async done => {
        const res = await request.get('/api/repos');
        const resRepos = JSON.parse(res.text);
        
        expect(resRepos.length).toBe(25)
        done();
    });
});

describe('Test POST api/repos endpoint', () => {
    it('It should response with 201', async done => {
        const res = await request.post('/api/repos');

        expect(res.status).toBe(201);
        done();
    })
})
