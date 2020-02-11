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
        
        return collection
                .find({}) 
                .limit(per_page)
                .skip( current_page > 0 ? ( ( current_page - 1 ) * per_page ) : 0 )
            .toArray()
            .then(value => {
                return value
            })
            .catch(err => {
                console.log('Error@queryHelper:getQueryDataDocument')
            })
    }

}

module.exports = QueryHelper