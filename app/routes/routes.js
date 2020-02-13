const express = require('express')
const router = express.Router()
const Area = require('../controllers/AreaController')


router.get(`/area/:id`, Area.detail )
router.get(`/area/ListArea`, Area.get_list_area )
router.post('/area/create', Area.create_post )


module.exports = router