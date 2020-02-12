const assert = require('assert')
const sinon  = require('sinon')
const PassThrough = require('stream').PassThrough
const http   = require('http')

const api   = require('../test/api')

describe('api', function(){

    this.beforeEach( function() {
        this.request    = sinon.stub(http, 'request')
    })

    this.afterEach( function() {
        http.request.restore()
    })

    // Place Test Here
    it('Shoud convert get result to object', function(done){
        let expected = { hello: 'world' }
        let response = new PassThrough()
        response.write(JSON.stringify(expected))
        response.end()

        let request = new PassThrough()
        this.request.callsArgWith(1, response)
            .returns(request)

        api.get(function(err, result){
            assert.deepEqual(result, expected)
            done()
        })
    })

    it('should send post params in request body', function(){
        let params = { foo: 'bar' }
        let expected = JSON.stringify(params)

        let request = new PassThrough()
        let write   = sinon.spy(request, 'write')

        this.request.returns(request)
        api.post(params, function(){ })
        assert(write.withArgs(expected).calledOnce)
    })

    it('should pass request error to callback', function(done){
        let expected = 'some error'
        let request  = new PassThrough()

        this.request.returns(request)

        api.get(function(err){
            assert.equal(err, expected)
            done()
        })
        request.emit('error', expected)
    })
    



})
