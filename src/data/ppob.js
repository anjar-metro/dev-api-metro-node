const dataPPOB = { 
    data: [
        { no : 1, lokasi : "Bakmie Lung Kee", global : 100, mitra : 50, promo : 10, koordinator : 20, adn : 50, type : "PDAM", aksi : "<td class='text-center'><a href='/schema_ppob/edit/12' class='btn btn-primary'>\n            <i class='fa fa-pencil'></i></a><a href='/schema_ppob/hapus/12' onclick='javascript: \n             return confirm(\"Anda Yakin Mau Menghapus Skema PPOB lokasi Bakmie Lung Kee dengan tipe PDAM ?\")' class='btn btn btn-danger'>\n            <i class='fa fa-remove'></i></a></td>" },
        { no : 2, lokasi : "Bakmie Lung Kee 2", global : 100, mitra : 50, promo : 10, koordinator : 20, adn : 50, type : "PDAM", aksi : "<td class='text-center'><a href='/schema_ppob/edit/12' class='btn btn-primary'>\n            <i class='fa fa-pencil'></i></a><a href='/schema_ppob/hapus/12' onclick='javascript: \n             return confirm(\"Anda Yakin Mau Menghapus Skema PPOB lokasi Bakmie Lung Kee dengan tipe PDAM ?\")' class='btn btn btn-danger'>\n            <i class='fa fa-remove'></i></a></td>" },
    ],
    total: 20,
    per_page: 15,
    current_page: 2,
    last_page: 5,
    next_page_url: null,
    prev_page_url: null,
    from: 1,
    to: 10

    
}

module.exports = {
    bind: function (app) {
        const path = '/ppob'
        const ListSkema = '/ListSkema' 

        let myDataPPOBSkema = dataPPOB 

        app.get(`${path}${ListSkema}`, (req, res) => {
            const host = req.headers.host
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Content-Type', 'application/json')

            myDataPPOBSkema.current_page++
            myDataPPOBSkema.next_page_url = `http://${host}${path}${ListSkema}?page=${myDataPPOBSkema.current_page}`
            myDataPPOBSkema.prev_page_url = `http://${host}${path}${ListSkema}?page=${myDataPPOBSkema.current_page - 2}`
            console.log(`Request to : /ListSkema ${myDataPPOBSkema}`)

            let filter = req.query.filter
            myDataPPOBSkema.customFilter = filter
            // querystring.parse()
            res.end(JSON.stringify(myDataPPOBSkema))
        }) 

    }

}