const express = require('express')
const app = express()
const port = 5000
const route = require('./src/route')


route.init(app);

app.listen(port, () => console.log(`App Listening on port ${port}`));
