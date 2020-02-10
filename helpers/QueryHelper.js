const queryHelper = {
    async countAllDocument(collection){
        return collection.countDocuments()
            .then(numItem => {
                return numItem
            })
            .catch(err => {
                console.log('Error@queryHelper:countAllDocument')
            })
    },
    async countQueryDocument(collection){

    },
    async getQueryDocument(req, collection){
        let per_page = parseInt( req.query.per_page )|| 10
        return collection.find({}).limit(per_page).toArray()
        .then(value => {
            return value
        })
        .catch(err => {
            console.log('Error@queryHelper:getQueryDocument')
        })
    }

}

module.exports = queryHelper