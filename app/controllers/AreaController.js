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
    async detail(req, res) {

        const db = req.app.locals.db
        const coll = db.collection('area')
        area_model.setConnection(db, coll)

        let jsonRes = area_model.jsonTemplate

        // console.log(area_model.jsonTemplate)
        let result = await area_model.findOne({ id: parseInt(req.params.id)})
            .then( value => { 
                jsonRes.success = true
                jsonRes.message = "Data Found"
                jsonRes.data = value
                return value 
            })
            .catch( err => { 
                jsonRes.success = false
                jsonRes.message = err
            
            })

        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Content-Type', 'application/json') 
        res.jsonp( jsonRes )
    },
    async create_post(req, res){
        // area_model.insertOne()
        const db = req.app.locals.db
        const coll = db.collection('area')
        area_model.setConnection(db, coll )

        const dataBody = req.body 
        
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Content-Type', 'application/json') 
  
        
        let result = await area_model.insertOne(dataBody)
            .then( res => { return res })
            .catch( err => {
                console.log(err )
                throw err
            })
        // console.log(result)
        res.jsonp( { code: result} )
    },
    delete() {

    },
    update() {

    },
    list() {

    }
}

module.exports = Area
