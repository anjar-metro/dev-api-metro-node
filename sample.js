const express = require('express') 
const bodyParser = require('body-parser')
var app = express()

const port = 5001  

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/sample', function(request, response) {
    console.log(request.body)
    response.write(request.body)
    response.end()
});
 
 
app.listen(port, () => console.log(`App Listening on port ${port}`))
