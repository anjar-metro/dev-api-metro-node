var model = require('../models/base.models')
const dataProviderHelper = require('../helpers/dataProviderHelper')

const schema = {
    _id:null  , id: null  , active: null  , image: null  , nama_lokasi: null  , tipe_lokasi: null  , provinsi: null  , kota: null  , kecamatan: null  , tipe_parkir: null  , action : null
}

model.schema = schema 
model.collectionName = 'area'
model.getListArea = async function(req){
    const db = req.app.locals.db
    const collection  = db.collection(this.collectionName)
    this.setConnection(db, collection)

        let dataProvider = dataProviderHelper

    // return dataProvider.fetchData(req, collection)
    return dataProvider.fetch(req, model)
}

module.exports = model