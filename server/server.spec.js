const app = require('./index.js');
const supertest = require('supertest');
const request = supertest(app);

describe('Init Jest Test', function() {
    // Test should fail because 1 !== 2
    it('Testing to see if Jest works', () => {
        expect(1).toBe(2);
    });
    // Test should pass because 2 === 2
    it('Testing to see if Jest works', () => {
        expect(2).toBe(2);
    });
});

