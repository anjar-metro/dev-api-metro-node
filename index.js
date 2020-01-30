const express = require('express')
const app = express()
const port = 5000
const route = require('./src/route')


route.init(app)

app.use(express.static('images'))

//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/images'))

app.listen(port, () => console.log(`App Listening on port ${port}`))
