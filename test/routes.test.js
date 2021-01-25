const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');

chai.use(chaiHttp);

describe('Routes', () => {
  describe('/ Index Page and returns element text', () => {
    it('GET /', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.text).to.be.a('string');
          done();
        });
    });
  });

  describe('/search with Query for porsche and returns element body text', () => {
    it('Queries /search?=porsche', (done) => {
      chai
        .request(app)
        .get('/search?q=porsche')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.text).to.be.a('string');
          done();
        });
    });
  });
});
