const area_model = require('../models/area')

const Area = {
    template: {
        data: [],
        total: null, per_page: 10,
        current_page: null, last_page: null,
        next_page_url: null, prev_page_url: null,
        from: null, to: null
    },
    hello() {
        return 'Hello There'
    }, 
    /* getListArea(req, res, queryResult ) {
        this.template.data = queryResult
        this.template.total = 
        // Set / Output Respose
        this.setResponse(req, res, queryResult)
            
        // Area.setResponse(req, res, queryResult )
        // Area.getListArea(req, res, result)
        // res.status(202)
        // .jsonp( { data: result} )
    }, */
    /* async getListArea(req, collection ) {
        let dataProvider = dataProviderHelper

        return dataProvider.fetchData(req, collection)
    }, */
    setResponse(req, res, queryResult){      
        this.template.data = queryResult
        
        return res.status(202)
           .jsonp( this.template )

    },
    async get_list_area(req, res){
        let db = req.app.locals.db
        let coll = db.collection("area")
        const ID = 'GET:AREA:LIST_AREA:JSON'
    
        try {
            coll = db.collection("area")
    
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Content-Type', 'application/json') 
      
            // area_model.getListArea(req, coll) // async
            area_model.getListArea(req) // async
                .then( json_template  => {
                    res
                        .status(202)
                        .jsonp( json_template )
                }) 
            
        } catch (error) {
            console.log(error)
        }
        
    },
    index() {

    },
    create_post(req, res){
        // area_model.insertOne()
        const db = req.app.locals.db
        const coll = db.collection('area')

        area_model.setConnection(db, coll )

        const dataBody = req.body 
        
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Content-Type', 'application/json') 
  
        
        let result = area_model.insertOne(dataBody)
        console.log(result)        

        res.jsonp( {result} )
    },
    delete() {

    },
    update() {

    },
    list() {

    }
}

module.exports = Area
