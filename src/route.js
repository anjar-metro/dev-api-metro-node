const area = require('./data/area')
const mitra = require('./data/mitra')

module.exports = {
    init: function(app) {
        app.get('/', (req, res) => res.send('Hello World'))

        area.bind(app)

        mitra.bind(app)
        
    } 
}  