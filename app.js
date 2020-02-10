const express = require('express')
const app = express()
const mongoClient = require('mongodb').MongoClient
// const router = require('route')
// const area = require('./routes/area')
const route = require('./routes/index')

// 
const port = 5000
const mongo_url = "mongodb://mongoadmin:mongoadmin@localhost:27018"
const mongo_db = "metrotest01"

app.use(route)
app.use('/images', express.static(__dirname + '/images'))

// Open MongoDB Connection First
mongoClient.connect(mongo_url, function(err, db) {
    if (err) throw err;
    console.log("MongoDB Connected!");

    // ReUse The Connection 
    app.locals.db = db.db(mongo_db)

    // Start Listening
    app.listen(port, () => console.log(`App Listening on port ${port}`))
     
}); 

