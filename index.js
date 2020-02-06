const express = require('express')
var mongoClient = require('mongodb').MongoClient
const app = express()
const port = 5000
const route = require('./src/route')

route.init(app)

app.use(express.static('images'))

//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/images'))

// make client connect to mongo service
let url = "mongodb://mongoadmin:mongoadmin@localhost:27018"; 
mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected to Database!");
    // print database name
    // console.log("db object points to the database : "+ db.databaseName);

    var dbo = db.db("metrotest01");
    dbo.collection("area").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
     
}); 

app.listen(port, () => console.log(`App Listening on port ${port}`))
