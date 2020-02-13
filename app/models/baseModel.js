const jsonTemplate = require('./jsonTemplate')

const baseModel = {
    jsonTemplate: jsonTemplate,
    db: null, collection: null, collectionName: null,
    counterName: "counters",
    setConnection(db, collection){
        this.db         = db
        this.collection = collection
    },
    async updateId(){
        return this.db.collection(this.counterName).findOneAndUpdate(
                        { 'sequence_name' : this.collectionName }, 
                        { $inc: { "sequence_value" : 1 } })
                .then( result => { return  result })
                .catch(err => { console.log('Error@baseModel:updateId', err )})
        // return DataObj
    },
    async findOne(paramsObj){
        return this.collection.findOne( paramsObj)
                .then( value => { return value })
                .catch( err => {console.log('Error@baseModel:findOne', err) ; throw err})
    },
    async countAllDocument(){
        return this.collection.countDocuments()
            .then(numItem => {
                return numItem
            })
            .catch(err => {
                console.log('Error@baseModel:countAllDocument')
                return null
            })
    },
    async countQueryDocument(collection){

    },
    async getQueryDataDocument(req ){
        let per_page = parseInt( req.query.per_page )|| 10
        let current_page = parseInt( req.query.page)||1
        let sort_param = req.query.sort || "_id|asc"
        let sort = sort_param.split("|")
        let Order = `{ "${sort[0]}"  :  ${sort[1] == "asc" ? 1 : -1} }`

        return this.collection
                .find({}) 
                .limit(per_page)
                .sort( JSON.parse(Order) )
                .skip( current_page > 0 ? ( ( current_page - 1 ) * per_page ) : 0 )
            .toArray()
            .then(value => { return value })
            .catch(err => { console.log('Error@baseModel:getQueryDataDocument') })
    },
    async insertOne(DataObj){
        let counters = await this.updateId()
        
        DataObj.id = counters.value.sequence_value
        
        return await this.collection.insertOne(DataObj)
    },
    getNextSequenceValue(collection, sequenceName){

        let sequenceDocument = collection.findAndModify({
           query:{ sequence_name: sequenceName },
           update: { $inc: { sequence_value: 1 } },
           new:true
        });
         
        return sequenceDocument.sequence_value;
    },
    validate(){
        // TODO: Put Validation Before Insert Data
    }
}

module.exports = baseModel