const express = require('express')
const app = express()
const mongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./app/routes/routes')
const DbConfig = require('./app/config/db.config')
const APP_PORT = 5000

// const mongo_url = "mongodb://mongoadmin:mongoadmin@localhost:27018"
// const mongo_db = "metrotest01"
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)
app.use('/images', express.static(__dirname + '/images'))

// Open MongoDB Connection First
mongoClient.connect(DbConfig.URL(), function(err, db) {
    if (err) throw err;
    console.log("MongoDB Connected!");
    
    // ReUse The Connection 
    app.locals.config = 'SampleConfig'
    app.locals.db = db.db(DbConfig.DB)

    // Start Listening
    app.listen(APP_PORT, () => console.log(`App Listening on port ${APP_PORT}`))
     
}); 

