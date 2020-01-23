/**
"No","NIK","Nama","Lokasi","Type","Tanggal","Jam","Jenis","No.Pol","Global"
"1","Demo Mitra Marqir","Demo Mitra Marqir","Ruko Royal Palace Prof. DR. Soepomo","QR Parkir","2020-01-17","00:05:52","motor","Z5809LB","2000"
"2","999999","Yohanes Yudhi","Ruko Royal Palace Prof. DR. Soepomo","QR Parkir","2020-01-17","11:44:35","motor","B1289PO","2000"
"3","Demo Mitra Marqir","Demo Mitra Marqir","Ruko Royal Palace Prof. DR. Soepomo","QR Parkir","2020-01-17","12:25:34","motor","Z5809LB","2000"
"4","Demo Mitra Marqir","Demo Mitra Marqir","Ruko Royal Palace Prof. DR. Soepomo","QR Parkir","2020-01-17","12:39:41","motor","Z5809LB","2000"
"5","Demo Mitra Marqir","Demo Mitra Marqir","Ruko Royal Palace Prof. DR. Soepomo","QR Parkir","2020-01-17","14:17:36","motor","D12VAR","2000"
"6","Demo Mitra Marqir","Demo Mitra Marqir","Ruko Royal Palace Prof. DR. Soepomo","payment parkir","2020-01-17","14:42:09","motor","B123AZ","2000"
"7","999999","Yohanes Yudhi","Ruko Royal Palace Prof. DR. Soepomo","QR Parkir","2020-01-17","14:42:35","motor","D12VAR","2000"
 */
const dataTransaction = {
    data: [
        { id: 1, no: 1, nik: "6151191000030", nama: "Mat Hedi", lokasi: "Jl Bahagia", type: "QR Parkir", tanggal: "2020-01-17", jam: "00:05:52", jenis: "motor", no_pol: "Z5809LB", global: "2000" },
        { id: 2, no: 2, nik: "6151191000031", nama: "Yohanes Yudhi", lokasi: "Jl Bahagia ", type: "QR Parkir", tanggal: "2020-01-17", jam: "00:05:52", jenis: "motor", no_pol: "Z5809LB", global: "2000" },
        { id: 3, no: 3, nik: "6151191000032", nama: "Mat Solar", lokasi: "Jl Bahagia ", type: "QR Parkir", tanggal: "2020-01-17", jam: "00:05:52", jenis: "motor", no_pol: "Z5809LB", global: "2000" },
        { id: 4, no: 4, nik: "6151191000033", nama: "Mat Iyus", lokasi: "Jl Bahagia ", type: "QR Parkir", tanggal: "2020-01-17", jam: "00:05:52", jenis: "motor", no_pol: "Z5809LB", global: "2000" },
        { id: 5, no: 5, nik: "6151191000034", nama: "Mat Tyson", lokasi: "Jl Bahagia ", type: "QR Parkir", tanggal: "2020-01-17", jam: "00:05:52", jenis: "motor", no_pol: "Z5809LB", global: "2000" },
        { id: 6, no: 6, nik: "6151191000035", nama: "Mat Amu", lokasi: "Jl Bahagia ", type: "QR Parkir", tanggal: "2020-01-17", jam: "00:05:52", jenis: "motor", no_pol: "Z5809LB", global: "2000" },
        { id: 7, no: 7, nik: "6151191000036", nama: "Mat Darsono", lokasi: "Jl Bahagia ", type: "QR Parkir", tanggal: "2020-01-17", jam: "00:05:52", jenis: "motor", no_pol: "Z5809LB", global: "2000" },
        { id: 8, no: 8, nik: "6151191000037", nama: "Mat hiysen", lokasi: "Jl Bahagia ", type: "QR Parkir", tanggal: "2020-01-17", jam: "00:05:52", jenis: "motor", no_pol: "Z5809LB", global: "2000" },
        { id: 9, no: 9, nik: "6151191000038", nama: "Mat Xie", lokasi: "Jl Bahagia ", type: "QR Parkir", tanggal: "2020-01-17", jam: "00:05:52", jenis: "motor", no_pol: "Z5809LB", global: "2000" },
        { id: 10, no: 10, nik: "6151191000039", nama: "Mat Rahmat", lokasi: "Jl Bahagia ", type: "QR Parkir", tanggal: "2020-01-17", jam: "00:05:52", jenis: "motor", no_pol: "Z5809LB", global: "2000" }
    ],
    total: 30,
    per_page: 10,
    current_page: 1,
    last_page: 4,
    next_page_url: null,
    prev_page_url: null,
    from: 1,
    to: 10
}

const dataTransactionHarian = {
    // No 	NIK 	Nama 	Lokasi 	Tanggal 	Mobil 	Motor 	Global 
    data:[
        { id: 1, no: 1, nik : "3218266", nama :"Vicky Arif Rahman", tanggal_setor :"2019-08-28", lokasi :"UPNORMAL COFFEE ROASTER",   mobil : 0 , motor : 8, total_global: 16000},
        { id: 2, no: 2, nik : "3218266", nama :"Vicky Arif Rahman", tanggal_setor :"2019-08-30", lokasi :"UPNORMAL COFFEE ROASTER",   mobil : 1 , motor : 12, total_global: 29000},
        { id: 3, no: 3, nik : "3218266", nama :"Vicky Arif Rahman", tanggal_setor :"2019-08-31", lokasi :"UPNORMAL COFFEE ROASTER",   mobil : 4 , motor : 2, total_global: 24000},
        { id: 4, no: 4, nik : "3218266", nama :"Vicky Arif Rahman", tanggal_setor :"2019-09-03", lokasi :"UPNORMAL COFFEE ROASTER",   mobil : 0 , motor : 1, total_global: 2000},
        { id: 5, no: 5, nik : "3218266", nama :"Vicky Arif Rahman", tanggal_setor :"2019-09-09", lokasi :"UPNORMAL COFFEE ROASTER",   mobil : 0 , motor : 1, total_global: 2000},
        { id: 6, no: 6, nik : "3218266", nama :"Vicky Arif Rahman", tanggal_setor :"2019-09-23", lokasi :"UPNORMAL COFFEE ROASTER",   mobil : 0 , motor : 1, total_global: 2000},
        { id: 7, no: 7, nik : "3218266", nama :"Vicky Arif Rahman", tanggal_setor :"2019-09-25", lokasi :"UPNORMAL COFFEE ROASTER",   mobil : 1 , motor : 0, total_global: 5000},
        { id: 8, no: 8, nik : "3218266", nama :"Vicky Arif Rahman", tanggal_setor :"2019-09-26", lokasi :"UPNORMAL COFFEE ROASTER",   mobil : 5 , motor : 2, total_global: 29000},
        { id: 9, no: 9, nik : "3218266", nama :"Vicky Arif Rahman", tanggal_setor :"2019-09-29", lokasi :"UPNORMAL COFFEE ROASTER",   mobil : 0 , motor : 5, total_global: 10000},
        { id: 10, no: 10, nik : "3218266", nama :"Vicky Arif Rahman", tanggal_setor :"2019-09-30", lokasi :"UPNORMAL COFFEE ROASTER",   mobil : 0 , motor : 2, total_global: 4000}
    ],
    total: 20,
    per_page: 10,
    current_page: 1,
    last_page: 3,
    next_page_url: null,
    prev_page_url: null,
    from: 1,
    to: 10
}

const dataTransactionBulanan = {
    data: [
        {
            id: 1, no: 1, nama: "M Juanda", nik: "085895988950", lokasi: "Ruko Royal Palace Prof. DR. Soepomo",
            data: {
                tanggal_1: 2000, tanggal_2: "-", tanggal_3: "-", tanggal_4: "-", tanggal_5: "-", tanggal_6: 2000, tanggal_7: "-", tanggal_8: "-", tanggal_9: "-", tanggal_10: "-", tanggal_11: "-", tanggal_12: "-", tanggal_13: "-", tanggal_14: "-", tanggal_15: "-", tanggal_16: "-", tanggal_17: "-", tanggal_18: "-", tanggal_19: "-", tanggal_20: "-", tanggal_21: "-", tanggal_22: "-", tanggal_23: "-", tanggal_24: "-", tanggal_25: "-", tanggal_26: "-", tanggal_27: "-", tanggal_28: "-", tanggal_29: "-", tanggal_30: "-", tanggal_31: "-"
            }
        },
        {
            id: 2, no: 2, nama: "Suprapto", nik: "0895321878843", lokasi: "Ruko Royal Palace Prof. DR. Soepomo",
            data: { 
                tanggal_1 : "-", tanggal_2 : "-", tanggal_3 : "-", tanggal_4 : 4000, tanggal_5 : "-", tanggal_6 : "-", tanggal_7 : "-", tanggal_8 : 4000, tanggal_9 : "-", tanggal_10 : "-", tanggal_11 : 9000, tanggal_12 : "-", tanggal_13 : 2000, tanggal_14 : "-", tanggal_15 : "-", tanggal_16 : 2000, tanggal_17 : "-", tanggal_18 : "-", tanggal_19 : "-", tanggal_20 : "-", tanggal_21 : "-", tanggal_22 : "-", tanggal_23 : "-", tanggal_24 : "-", tanggal_25 : "-", tanggal_26 : "-", tanggal_27 : "-", tanggal_28 : "-", tanggal_29 : "-", tanggal_30 : "-", tanggal_31 : "-"
            }
        },
        {
            id: 3, no: 3, nama: "Demo Mitra Marqir", nik: "666666666666666666", lokasi: "Ruko Royal Palace Prof. DR. Soepomo",
            data: {
                tanggal_1 : "-", tanggal_2 : "-", tanggal_3 : "-", tanggal_4 : 2000, tanggal_5 : 2000, tanggal_6 : 2000, tanggal_7 : 4000, tanggal_8 : "-", tanggal_9 : "-", tanggal_10 : "-", tanggal_11 : 2000, tanggal_12 : "-", tanggal_13 : "-", tanggal_14 : "-", tanggal_15 : "-", tanggal_16 : "-", tanggal_17 : "-", tanggal_18 : "-", tanggal_19 : "-", tanggal_20 : "-", tanggal_21 : "-", tanggal_22 : "-", tanggal_23 : "-", tanggal_24 : "-", tanggal_25 : "-", tanggal_26 : "-", tanggal_27 : "-", tanggal_28 : "-", tanggal_29 : "-", tanggal_30 : "-", tanggal_31 : "-"
            }
        },
        {
            id: 4, no: 4, nama: "Moh Kami", nik: "6155191000032", lokasi: "Toko Buku Lestari Sunter",
            data: {
                tanggal_1 : 5000, tanggal_2 : "-", tanggal_3 : "-", tanggal_4 : "-", tanggal_5 : "-", tanggal_6 : "-", tanggal_7 : "-", tanggal_8 : "-", tanggal_9 : "-", tanggal_10 : "-", tanggal_11 : "-", tanggal_12 : "-", tanggal_13 : "-", tanggal_14 : "-", tanggal_15 : "-", tanggal_16 : "-", tanggal_17 : "-", tanggal_18 : "-", tanggal_19 : "-", tanggal_20 : "-", tanggal_21 : "-", tanggal_22 : "-", tanggal_23 : "-", tanggal_24 : "-", tanggal_25 : "-", tanggal_26 : "-", tanggal_27 : "-", tanggal_28 : "-", tanggal_29 : "-", tanggal_30 : "-", tanggal_31 : "-"
            }
        },
        {
            id: 5, no: 5, nama : "Ramadhan Janorialdy", nik : "082110880648", lokasi : "Ruko Royal Palace Prof. DR. Soepomo",
            data : {
                tanggal_1 : "-", tanggal_2 : "-", tanggal_3 : "-", tanggal_4 : "-", tanggal_5 : "-", tanggal_6 : "-", tanggal_7 : "-", tanggal_8 : "-", tanggal_9 : "-", tanggal_10 : "-", tanggal_11 : "-", tanggal_12 : "-", tanggal_13 : "-", tanggal_14 : 2000, tanggal_15 : "-", tanggal_16 : "-", tanggal_17 : "-", tanggal_18 : "-", tanggal_19 : "-", tanggal_20 : "-", tanggal_21 : "-", tanggal_22 : "-", tanggal_23 : "-", tanggal_24 : "-", tanggal_25 : "-", tanggal_26 : "-", tanggal_27 : "-", tanggal_28 : "-", tanggal_29 : "-", tanggal_30 : "-", tanggal_31 : "-"
            }
        },
        {
            id: 6, no: 6, nama : "Jamanudin", nik : "6155191000009", lokasi : "Bebek Kaleyo Danau Sunter",
            data : {
                tanggal_1 : "-", tanggal_2 : "-", tanggal_3 : "-", tanggal_4 : 5000, tanggal_5 : "-", tanggal_6 : "-", tanggal_7 : "-", tanggal_8 : "-", tanggal_9 : "-", tanggal_10 : "-", tanggal_11 : "-", tanggal_12 : "-", tanggal_13 : "-", tanggal_14 : "-", tanggal_15 : "-", tanggal_16 : "-", tanggal_17 : "-", tanggal_18 : "-", tanggal_19 : "-", tanggal_20 : "-", tanggal_21 : "-", tanggal_22 : "-", tanggal_23 : "-", tanggal_24 : "-", tanggal_25 : "-", tanggal_26 : "-", tanggal_27 : "-", tanggal_28 : "-", tanggal_29 : "-", tanggal_30 : "-", tanggal_31 : "-"
            }
        }
    ],
    total: 20,
    per_page: 10,
    current_page: 1,
    last_page: 3,
    next_page_url: null,
    prev_page_url: null,
    from: 1,
    to: 10
}

const dataTxHarianKendaraan =  {
    data: [
        // Jenis , Jumlah, Pendapatan
        { jenis: "Mobil", jumlah: 47, pendapatan: 234000},
        { jenis: "Motor", jumlah: 148, pendapatan: 308000}
    ]}

 
module.exports = {
    bind: function (app) {
        const path = '/report'
        const ListTransaction = '/ListTransaction'
        const ListHarian = '/ListHarian'
        const ListBulanan = "/ListBulanan"

        let myDataTransaction = dataTransaction
        let myDataHarian = dataTransactionHarian
        let myDataBulanan = dataTransactionBulanan

        app.get(`${path}${ListTransaction}`, (req, res) => {
            const host = req.headers.host
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Content-Type', 'application/json')

            myDataTransaction.current_page++
            myDataTransaction.next_page_url = `http://${host}${path}${ListTransaction}?page=${myDataTransaction.current_page}`
            myDataTransaction.prev_page_url = `http://${host}${path}${ListTransaction}?page=${myDataTransaction.current_page - 2}`
            console.log(`Request to : /ListTransaction ${myDataTransaction}`)

            let filter = req.query.filter
            myDataTransaction.customFilter = filter
            // querystring.parse()
            res.end(JSON.stringify(myDataTransaction))
        })

        app.get(`${path}${ListHarian}`, (req, res) => {
            const host = req.headers.host
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Content-Type', 'application/json')

            myDataHarian.current_page++
            myDataHarian.next_page_url = `http://${host}${path}${ListHarian}?page=${myDataHarian.current_page}`
            myDataHarian.prev_page_url = `http://${host}${path}${ListHarian}?page=${myDataHarian.current_page - 2}`
            console.log(`Request to : /ListHarian ${myDataHarian}`)

            let filter = req.query.filter
            myDataHarian.customFilter = filter
            // querystring.parse()
            res.end(JSON.stringify(myDataHarian))
        })

        app.get(`${path}/ListHarianKendaraan`,(req,res) => {
            const host = req.header.host
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Content-Type', 'application/json')

            res.end(JSON.stringify(dataTxHarianKendaraan))
        })

        app.get(`${path}${ListBulanan}`, (req, res) => {
            const host = req.headers.host
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Content-Type', 'application/json')

            myDataBulanan.current_page++
            myDataBulanan.next_page_url = `http://${host}${path}${ListBulanan}?page=${myDataBulanan.current_page}`
            myDataBulanan.prev_page_url = `http://${host}${path}${ListBulanan}?page=${myDataBulanan.current_page - 2}`
            console.log(`Request to : /ListBulanan ${myDataBulanan}`)

            let filter = req.query.filter
            myDataBulanan.customFilter = filter
            // querystring.parse()
            res.end(JSON.stringify(myDataBulanan))
        })


    }
}