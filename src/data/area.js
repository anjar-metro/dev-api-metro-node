const dataArea = {
    data: [
        {
          id  : 1,
          no : 1,
          image: "http://localhost:8080/img/avatar-s-5.73b9c8f8.png",
          nama_lokasi : "Ho Marqir",
          tipe_lokasi : "on street",
          provinsi : "DKI Jakarta",
          kota : "Jakarta Selatan",
          kecamatan : "Tebet",
          tipe_parkir : "Per Vehicle",
          action : null
        },
        {
            id  : 2,
            no : 2,
            image: "http://localhost:8080/img/avatar-s-5.73b9c8f8.png",
            nama_lokasi : "Laboratorium Klinik Prodia",
            tipe_lokasi : "on street",
            provinsi : "DKI Jakarta",
            kota : "Jakarta Utara",
            kecamatan : "Tanjung Priok",
            tipe_parkir : "Per Vehicle",
            action : null
        },
        {
            id  : 3,
            no : 3,
            image: "http://localhost:8080/img/avatar-s-5.73b9c8f8.png",
            nama_lokasi : "RM. Sate Kambing Haji Nawi",
            tipe_lokasi : "on street",
            provinsi : "DKI Jakarta",
            kota : "Jakarta Timur",
            kecamatan : "Duren Sawit",
            tipe_parkir : "Per Vehicle",
            action : null
        },
        {
            id  : 4,
            no : 4,
            image: "http://localhost:8080/img/avatar-s-5.73b9c8f8.png",
            nama_lokasi : "Bank BRI KCP Danau Sunter",
            tipe_lokasi : "on street",
            provinsi : "DKI Jakarta",
            kota : "Jakarta Utara",
            kecamatan : "Tanjung Priok",
            tipe_parkir : "Per Vehicle",
            action : null
        },
        {
            id  : 5,
            no : 5,
            image: "http://localhost:8080/img/avatar-s-5.73b9c8f8.png",
            nama_lokasi : "Sinar Matahari Foto",
            tipe_lokasi : "on street",
            provinsi : "DKI Jakarta",
            kota : "Jakarta Pusat",
            kecamatan : "Tanah Abang",
            tipe_parkir : "Per Vehicle",
            action : null
        },
        {
            id  : 6,
            no : 6,
            image: "http://localhost:8080/img/avatar-s-5.73b9c8f8.png",
            nama_lokasi : "Taman Ayodya",
            tipe_lokasi : "on street",
            provinsi : "DKI Jakarta",
            kota : "Jakarta Selatan",
            kecamatan : "Kebayoran Baru",
            tipe_parkir : "Per Vehicle",
            action : null
        },
        {
            id  : 7,
            no : 7,
            image: "http://localhost:8080/img/avatar-s-5.73b9c8f8.png",
            nama_lokasi : "Indomaret Raya Mangga Besar",
            tipe_lokasi : "on street",
            provinsi : "DKI Jakarta",
            kota : "Jakarta Barat",
            kecamatan : "Taman Sari",
            tipe_parkir : "Per Vehicle",
            action : null
        },
        {
            id  : 8,
            no : 8,
            image: "http://localhost:8080/img/avatar-s-5.73b9c8f8.png",
            nama_lokasi : "RM. Surya Masakan Padang",
            tipe_lokasi : "on street",
            provinsi : "DKI Jakarta",
            kota : "Jakarta Pusat",
            kecamatan : "Tanah Abang",
            tipe_parkir : "Per Vehicle",
            action : null
        },
        {
            id  : 9,
            no : 9,
            image: "http://localhost:8080/img/avatar-s-5.73b9c8f8.png",
            nama_lokasi : "Bank BRI KCP Klender",
            tipe_lokasi : "on street",
            provinsi : "DKI Jakarta",
            kota : "Jakarta Timur",
            kecamatan : "Duren Sawit",
            tipe_parkir : "Per Vehicle",
            action : null
        }
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
module.exports = {
    bind: function(app) {
        const path = '/area'
        const subPath = '/ListArea'
        let myDataArea = dataArea

        app.get(`${path}${subPath}`, (req,res) => {
            const host = req.headers.host
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Content-Type', 'application/json') 
            
            myDataArea.current_page++
            myDataArea.next_page_url = `http://${host}${path}/ListArea?page=${myDataArea.current_page}`
            myDataArea.prev_page_url = `http://${host}${path}/ListArea?page=${myDataArea.current_page-2}`
            console.log(`Request to : /ListArea ${myDataArea}` )
            res.end(JSON.stringify( myDataArea ))
        })       
    }
}