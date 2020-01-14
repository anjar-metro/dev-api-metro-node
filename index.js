const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World'))

app.get('/abc', (req,res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ a: 1 }))
})
app.listen(port, () => console.log(`Example App Listening on port ${port}`))