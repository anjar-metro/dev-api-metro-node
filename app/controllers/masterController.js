const jsonTemplate = require('../models/jsonTemplate');

const master = {
    jsonTemplate: jsonTemplate,
    async get_provinces(req, res){
        const db = req.app.locals.db;
        const coll = db.collection('ref_provinces');

        try {
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Content-Type', 'application/json') ;
      
            jsonRes = jsonTemplate;

            await coll.find({}, { projection: { id : 1, province_id : 1, name : 1} } ) 
                    .sort( { name: 1} )
                    .toArray()
                    .then( (value ) => {  
                        let province_data = [];

                        value.forEach((item, key) => {
                            province_data.push({
                                text: item.name, value: item.id
                            })    
                        });
                        jsonRes.success = true;
                        jsonRes.message = "Data Found";
                        jsonRes.data    = province_data;
                        return jsonRes ;
                    })
                    .catch( err => { 
                        throw err;
                        console.log('Error@baseModel:getQueryDataDocument');
                    })
            res.status(200)
                .jsonp( jsonRes );
            
        } catch (error) {
            console.log(error);
        }
    },
    async get_city(req, res){
        const db = req.app.locals.db;
        const coll = db.collection('ref_city');
        const provinceId = parseInt(req.query.province_id) || null

        try {
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Content-Type', 'application/json') ;
      
            jsonRes = jsonTemplate;

            await coll.find({ province_id: provinceId }, { projection: { _id: 0, id : 1, city_id : 1, name : 1} } ) 
                    .sort( { name: 1} )
                    .toArray()
                    .then( value => {  

                        let city_data = [];
                        if( value.length === 0 ){
                            throw new Error('Data Not Found');
                        }
                        value.forEach((item, key) => {
                            city_data.push({
                                text: item.name, value: item.id
                            })    
                        });
                        jsonRes.success = true;
                        jsonRes.message = "Data Found";
                        jsonRes.data    = city_data;
                        return jsonRes ;
                    })
                    .catch( err => { 
                        jsonRes.message = err.message;
                    })
            res.status(200)
                .jsonp( jsonRes );
            
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = master