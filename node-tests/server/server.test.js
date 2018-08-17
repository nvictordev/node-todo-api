const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello Victor', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found',
          })
        })
        .end(done);
    });
  });
  describe('GET /users', () => {
    it('should return object exist', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Victor',
            age: 31
          })
        })
        .end(done);
    });
  });
});

