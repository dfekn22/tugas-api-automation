const request = require('supertest');
const expect = require('chai').expect;

describe('Login Kasir Aja', function() {
  it('Success jika email dan password benar', function(done) {
      request('https://kasir-api.belajarqa.com')
         .post('/authentications')
         .send({ email: 'daffa@gmail.com', password: '123' })
         .expect(201)
         .expect(function(response) {
            console.log(response.body)
         })
         .end(done);
  }); 
});