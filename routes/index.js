const express = require('express')
const router = express.Router()
const Area = require('../controllers/Area')

router.get(`/area/ListArea`, (req,res) => {
    let host, db, coll
    const ID = 'GET:AREA:LIST_AREA:JSON'

    try {
        host = req.headers.host
        db = req.app.locals.db
        coll = db.collection("area")

        let per_page = parseInt( req.query.per_page  ) || 10
        
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Content-Type', 'application/json') 
 
        Area.getListArea(req, coll) // async
            .then(template => {
                console.log( template)
                res
                    .status(202)
                    .jsonp(template)
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