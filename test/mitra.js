/* const chai = require('chai')
const assert = require('chai').assert
const request = require('request')
const expect = chai.expect

describe('API Area', function()  {
    const host = 'http://localhost:5000'

    it('GET:/area/ListArea return JSON', async function(done){
        try {
          // change user password
          let re1 = await chai.request(app)
            .post('/users/edit')
            .set('authorization', `Bearer ${token}`)
            .send({
              username: 'user@domain.com',
              password: 'password6',
            });
          expect(re1.statusCode).to.equal(200);
    
          // change password back since before hook not working
          let re2 = await chai.request(app)
            .post('/users/edit')
            .set('authorization', `Bearer ${token}`)
            .send({
              username: 'user@domain.com',
              password: 'password6',
              passwordNew: 'password',
              passwordConfirm: 'password',
            });
          expect(re2.statusCode).to.equal(200);
        } catch (error) {
          // error stuff here
        }
    }) 
}) */