const querystring = require('querystring');
const area = require('./data/area')
const mitra = require('./data/mitra')
const report = require('./data/report')
const virtual = require('./data/virtual')
const ppob = require('./data/ppob')
const apps = require('./data/apps')

module.exports = {
    init: function(app) {
        app.get('/', (req, res) => res.send('Hello World'))

        area.bind(app)
        mitra.bind(app)
        report.bind(app)
        virtual.bind(app)
        ppob.bind(app)
        apps.bind(app)
        
    } 
}  