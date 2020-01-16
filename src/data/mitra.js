const dataMitra = {
    "data": [
        {
          "id": 1,
          "nik": "6151191000030",
          "image": "http://localhost:8080/img/avatar-s-5.73b9c8f8.png",
          "nama": "Ahmad Suherman",
          "no_telp": "085892443311",
          "lokasi": "Bank Soal Soal",
          "login": true,
          "wallet": true
        },
        {
          "id": 2,
          "nik": "6151191000031",
          "image": "http://localhost:8080/img/avatar-s-5.73b9c8f8.png",
          "nama": "Sudarmadji",
          "no_telp": "085892443312",
          "lokasi": "Bank Buku Sekolah",
          "login": false,
          "wallet": false
        }
    ],
    "total": 200,
    "per_page": 15,
    "current_page": 1,
    "last_page": 14,
    // "next_page_url": "https:\/\/vuetable.ratiw.net\/api\/users?page=2",
    "next_page_url": null,
    "prev_page_url": null,
    "from": 1,
    "to": 15 
}

const dataMitraProfit = {
  "data": [
      { "no": 1, "id": 1, "persen":	50, "nominal": 0, "type": "persen" },
      { "no": 2, "id": 2, "persen":	70, "nominal": 0, "type": "persen" },
      { "no": 3, "id": 4, "persen":	40, "nominal": 0, "type": "persen" },
      { "no": 4, "id": 5, "persen":	50, "nominal": 0, "type": "persen" },
      { "no": 5, "id": 6, "persen":	60, "nominal": 0, "type": "persen" },
      { "no": 6, "id": 7, "persen":	70, "nominal": 0, "type": "persen" },
      { "no": 7, "id": 8, "persen":	80, "nominal": 0, "type": "persen" },
      { "no": 8, "id": 9, "persen":	90, "nominal": 0, "type": "persen" },
      { "no": 9, "id": 10, "persen": 100, "nominal": 0, "type": "persen" },
      { "no": 10, "id": 11, "persen":	25, "nominal": 0, "type": "persen" },
      { "no": 11, "id": 12, "persen": 35, "nominal": 0, "type": "persen" },
      { "no": 12, "id": 13, "persen": 45, "nominal": 0, "type": "persen" },
      { "no": 13, "id": 14, "persen": 55, "nominal": 0, "type": "persen" },
      { "no": 14, "id": 25, "persen": 32, "nominal": 0, "type": "persen" },
      { "no": 15, "id": 26, "persen": 0, "nominal": 0, "type": "persen" },
      { "no": 16, "id": 28, "persen": 92, "nominal": 0, "type": "persen" },
      { "no": 17, "id": 29, "persen": 8, "nominal": 0, "type": "persen" },
      { "no": 18, "id": 30, "persen": 10, "nominal": 0, "type": "persen" },
      { "no": 19, "id": 3, "persen": 10, "nominal": 10, "type": "nominal" },
      { "no": 20, "id": 15, "persen": 0, "nominal": 100, "type": "nominal"}
  ],
  "total": 200,
  "per_page": 15,
  "current_page": 1,
  "last_page": 14,
  // "next_page_url" : "https:\/\/vuetable.ratiw.net\/api\/users?page=2",
  "next_page_url": null,
  "prev_page_url": null,
  "from": 1,
  "to": 15

}

module.exports =  {
    bind: function(app) {
        const path = '/mitra'
        let myData = dataMitra
        let myDataProfit = dataMitraProfit
        
        // Mitra
        app.get(`${path}/ListMitra`, (req,res) => {
            const host = req.headers.host
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Content-Type', 'application/json')

            console.log(req.query)

            myData.current_page++
            myData.next_page_url = `http://${host}${path}/ListMitra?page=${myData.current_page}`
            myData.prev_page_url = `http://${host}${path}/ListMitra?page=${myData.current_page-2}`
            res.end(JSON.stringify( dataMitra ))
        })

        // Mitra Profit
        app.get(`${path}/ListMitraProfit`, (req,res) => {
            const host = req.headers.host
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Content-Type', 'application/json') 

            myDataProfit.current_page++
            myDataProfit.next_page_url = `http://${host}${path}/ListMitraProfit?page=${myDataProfit.current_page}`
            myDataProfit.prev_page_url = `http://${host}${path}/ListMitraProfit?page=${myDataProfit.current_page-2}`
            res.end(JSON.stringify( dataMitraProfit ))
        })

        

    }
}