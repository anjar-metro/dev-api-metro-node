/**
 * Removed to Index.js
 */
const express = require('express')
const router = express.Router()

router.get(`/area/ListArea`, (req,res) => {

    try {
        const host = req.headers.host
        const db = req.app.locals.db
        let data_result, coll

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Content-Type', 'application/json') 

        coll = db.collection("area")
        let q = false
        coll.find({}).toArray(function(err, result) {
            if (err) throw err
            // data_result = result
            res.jsonp( { data: result} )
            q = true
        });
        console.log(q)
        
        
        /* myDataArea.current_page++
        myDataArea.next_page_url = `http://${host}${path}/ListArea?page=${myDataArea.current_page}`
        myDataArea.prev_page_url = `http://${host}${path}/ListArea?page=${myDataArea.current_page-2}`
        console.log(`Request to : /ListArea ${myDataArea}` ) */
        
    } catch (error) {
        console.log(error)
    }
    
})   

module.exports = router