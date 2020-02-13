const QueryHelper = {
    /** * 
     * @param {object} collection 
     * @returns {integer} TotalData
     */ 
    async countAllDocument(collection){
        return collection.countDocuments()
            .then(numItem => {
                return numItem
            })
            .catch(err => {
                console.log('Error@queryHelper:countAllDocument')
                return null
            })
    },
    async countQueryDocument(collection){

    },
    async getQueryDataDocument(req, collection){
        let per_page = parseInt( req.query.per_page )|| 10
        let current_page = parseInt( req.query.page)||1
        let sort_param = req.query.sort || "_id|asc"
        let sort = sort_param.split("|")
        let Order = `{ "${sort[0]}"  :  ${sort[1] == "asc" ? 1 : -1} }`

        return collection
                .find({}) 
                .limit(per_page)
                .sort( JSON.parse(Order) )
                .skip( current_page > 0 ? ( ( current_page - 1 ) * per_page ) : 0 )
            .toArray()
            .then(value => {
                return value
            })
            .catch(err => {
                console.log('Error@queryHelper:getQueryDataDocument')
            })
    },
    async insertOne(req, collection, obj){
        const db = req.app.locals.db
        console.log(collection)
        /* obj.id = this.getNextSequenceValue(req, collection, sequenceName)
        collection.insertOne(obj, function(err, res) {
            if( err ){
                console.log('ERROR: QueryHelpder:insertOne', err)
                return err 
            }

            return res
        }) */
    },
    getNextSequenceValue(collection, sequenceName){

        let sequenceDocument = collection.findAndModify({
           query:{ sequence_name: sequenceName },
           update: { $inc: { sequence_value: 1 } },
           new:true
        });
         
        return sequenceDocument.sequence_value;
     }



}

module.exports = QueryHelper

