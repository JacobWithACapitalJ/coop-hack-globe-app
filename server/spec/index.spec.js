process.env.NODE_ENC = 'test';
const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-sorted'));
const app = require('../app');
const request = require('supertest')(app);
const connection = require('../../database/connection')

describe('/api', () => {
    after(() => {
        connection.destroy()
    });
    it('catches bad endpoints with a 404', () => {
        return request
            .get('/hamsterDance')
            .expect(404)
            .then(({body: {msg}}) => {
                expect(msg).to.equal('not found')
            })
    });
    describe('/api/toilets/', () => {
        describe('GET default', () => {
            it('gets a list of toilets', () => {
                return request
                    .get('/api/toilets')
                    .expect(200)
                    .then(({body }) => { 
                        const { toilets, max_count } = body;
                        expect(toilets.length).to.be.greaterThan(1);
                        toilets.every(toilet => expect(toilet).to.have.keys('longitude', 'latitude', 'count'));
                        expect(toilets[1].count).to.equal(12);
                        expect(max_count).to.equal(12);
                    });
            });
        });
        describe('GET queries', () => {
            it('can be filtered', () => {
                return request
                .get('/api/toilets?filter=unisex')
                .expect(200)
                .then(({ body: { toilets } }) => {
                    expect(toilets.length).to.be.greaterThan(1);
                    toilets.every(toilet => expect(toilet).to.have.keys('longitude', 'latitude', 'count'));
                    expect(toilets[1].count).to.equal(4);
                })
            })
        })
        describe('invalid methods caught', () => {
            it('PUT', () => {
                return request
                    .put('/api/toilets')
                    .expect(405)
                    .then(({body: {msg}}) => {
                        expect(msg).to.equal('bad method')
                    })
            });
            it('PATCH', () => {
                return request
                    .patch('/api/toilets')
                    .expect(405)
            });
            it('DELETE', () => {
                return request
                    .delete('/api/toilets')
                    .expect(405)
            });
            it('POST', () => {
                return request
                    .delete('/api/toilets')
                    .expect(405)
            });
        });
    });
});
