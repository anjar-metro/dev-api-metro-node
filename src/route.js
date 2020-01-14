const area = require('./src/data/area')
const mitra = require('./src/data/mitra')

module.exports = {
    init: function(app) {
        app.get('/', (req, res) => res.send('Hello World'))

        area.bind(app)

        mitra.bind(app)
        
    } 
}  