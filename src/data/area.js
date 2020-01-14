module.exports = {
    bind: function(app) {
        app.get('/area', (req,res) => {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ data: [1,2,3,4,5] }))
        })       
    }
}