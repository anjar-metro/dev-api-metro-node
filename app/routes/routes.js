const express = require('express')
const router = express.Router()

const Area = require('../controllers/AreaController')
const Master = require('../controllers/masterController')


router.get(`/area/ListArea`, Area.get_list_area )
router.post('/area/create', Area.create_post )
router.get(`/area/:id`, Area.detail )


router.get('/sample', function(req, res){

    console.log(req.app.locals.config)
})

// Master 
router.get('/master/getProvinces', Master.get_provinces)
router.get('/master/getCity', Master.get_city)


module.exports = router