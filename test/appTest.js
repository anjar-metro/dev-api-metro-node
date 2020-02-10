const assert = require('chai').assert
const sayHello = require('../app').sayHello

describe('App', function(){
    it('sayHello Should Return Hello',function(){
        let result = sayHello()
        assert.equal(result, 'hello')
    })

    it('sayHello should return string', function(){
        let result = sayHello()
        assert.typeOf(result, 'string')
    })
})
