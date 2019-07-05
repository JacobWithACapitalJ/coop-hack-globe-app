process.env.NODE_ENC = 'test';
const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-sorted'));
const app = require('../app');
const request = require('supertest')(app);

describe('/api/toilets/', () => 
    describe('GET', () => {
        it('gets a list of toilets', () => {
            return request
                .get('/api/toilets/')
                .expect(200)
        });
    });
});