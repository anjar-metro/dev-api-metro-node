const querystring = require('querystring');
const area = require('./data/area')
const mitra = require('./data/mitra')
const transact = require('./data/report')

module.exports = {
    init: function(app) {
        app.get('/', (req, res) => res.send('Hello World'))

        area.bind(app)
        mitra.bind(app)
        transact.bind(app)
        
    } 
}  