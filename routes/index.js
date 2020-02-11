const express = require('express')
const router = express.Router()
const Area = require('../controllers/Area')

router.get(`/area/ListArea`, (req,res) => {
    // let host, db 
    let db = req.app.locals.db
    let coll = db.collection("area")
    const ID = 'GET:AREA:LIST_AREA:JSON'

    try {
        // host = req.headers.host
        // db = req.app.locals.db
        coll = db.collection("area")

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Content-Type', 'application/json') 
 
        /* coll.find({}).limit(2).toArray()
            .then(value => {
                console.log(value)
                return value
            })
            .catch(err => {
                console.log('Error@queryHelper:getQueryDocument')
            }) */
        Area.getListArea(req, coll) // async
            .then( json_template  => {
                res
                    .status(202)
                    .jsonp( json_template )
            })

        
        /* myDataArea.current_page++
        myDataArea.next_page_url = `http://${host}${path}/ListArea?page=${myDataArea.current_page}`
        myDataArea.prev_page_url = `http://${host}${path}/ListArea?page=${myDataArea.current_page-2}`
        console.log(`Request to : /ListArea ${myDataArea}` ) */
        
    } catch (error) {
        console.log(error)
    }
    
})   

module.exports = router