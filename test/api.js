const http = require('http')

var api = {

    get(callback){
        
        var req = http.request({
            hostname: 'jsonplaceholder.typicode.com',
			path: '/posts/1'
        }, function(res) {
            let data = ''
            res.on('data', function(chunk){
                data+= chunk
            })

            res.on('end', function(){
                callback(null, JSON.parse(data))
            })
        })
        req.on('error', function(err){
            callback(err)
        })
        req.end()

    },
    post(data, callback){
        var req = http.request({
			hostname: 'jsonplaceholder.typicode.com',
			path: '/posts',
			method: 'POST'
		}, function(res) {
			var data = ''
			res.on('data', function(chunk) {
				data += chunk
			})
 
			res.on('end', function() {
				callback(null, JSON.parse(data))
			})
		});
 
		req.write(JSON.stringify(data))
		req.end()
    }
}

module.exports = api