const QueryHelper = require('../helpers/QueryHelper')
const dataProviderHelper = require('../helpers/dataProviderHelper')

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
    async getListArea(req, collection ) {
        let dataProvider = dataProviderHelper

        // let qh = QueryHelper
        //     qh.collection = collection

        /* let per_page = parseInt( req.query.per_page)

        // console.log(collection.countDocuments())
        this.template = await qh.countAllDocument(collection)
            .then(numItem => {
                this.template.total = numItem
                this.template.per_page = per_page
                // console.log(this.template.total)
                return this.template
            })
            .catch(err => {
                console.log('Error @Area:getListArea', err)
                // return err
            })

        this.template = await qh.getQueryDocument(req, collection)
            .then(value => {
                this.template.data = value
                return this.template
            })
            .catch(err => {
                console.log('Error @Area:getListArea', err)
                // return err
            })
            // return this.template */
             
        return dataProvider.fetchData(req, collection)


        // collection.countDocuments()
        // .then(numItem => {
        //         this.template.total = qh.countAllDocument(collection)
        //         // this.template.total =  numItem
        //         this.template.per_page = per_page
        //         // console.log(`Total : ${this.template.total}`)
        //         return this.template;

        //     })
        //     .catch(err => {
        //         console.log('Error @Area:getListArea', err);
        //     })
        /* collection.find({}).limit(per_page).toArray(function(err, queryResult) {
            if (err) throw err
            
            this.template.data = queryResult
            
            this.setResponse(req, res, queryResult)
        })  */

        // Set / Output Respose
            
        // Area.setResponse(req, res, queryResult )
        // Area.getListArea(req, res, result)
        // res.status(202)
        // .jsonp( { data: result} )
    },
    setResponse(req, res, queryResult){      
        this.template.data = queryResult
        
        return res.status(202)
           .jsonp( this.template )

    }
}

module.exports = Area