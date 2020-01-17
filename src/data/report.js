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



/* const dataTransactionHarian = { 
    data: [
         { nik: "6151191000030",	nama: "Mat Hedi", no_telp: "085892443310", lokasi: "Bank Danamon Kebahagiaan",	login: false, wallet: true },
         { nik: "954191000013",	nama: "Ahmad Sekti Wibowo", no_telp: "082210822779", lokasi: "Hotel Sidney 81",	login: false, wallet: true },
         { nik: "6155191100047",	nama: "M.Tajusbuhi", no_telp: "087877891052", lokasi: "Bank Mandiri KCP Griya Inti", login: false, wallet: true },
         { nik: "6151191000006",	nama: "Kusnadi", no_telp: "081218294420", lokasi: "Intan Motor",	login: true, wallet: true },
         { nik: "6153191000028",	nama: "Oki Zaka Fitriana Havidan", no_telp: "081413265363", lokasi: "Tamani, Optik Melawai",	login: false, wallet: true },
         { nik: "9999999",	nama: "Abu", no_telp: "085773671693", lokasi: "Ruko Royal Palace Prof. DR. Soepomo",	login: false, wallet: true },
         { nik: "6154191000016",	nama: "Muamar", no_telp: "087878846855", lokasi: "RM. Padang Sederhana",	login: false, wallet: true },
         { nik: "6152191000036",	nama: "Edih Supriadi", no_telp: "085893045855", lokasi: "RM .Medan Baru Jl krekot bunder No 65 pasar baru",	login: false, wallet: true },
         { nik: "6151191000034",	nama: "Abdul Jamil", no_telp: "088214284709", lokasi: "Indomaret Mangga Besar Raya 50",	login: false, wallet: true },
         { nik: "6151191000047",	nama: "Hendra Saputra", no_telp: "089602760661", lokasi: "Kwetiua Akang Medan",	login: false, wallet: true }]
}
 */
module.exports = {
    bind: function(app) {
        const path = '/report'
        const subPath = '/ListTransaction'
        let myDataTransaction = dataTransaction

        app.get(`${path}${subPath}`, (req,res) => {
            const host = req.headers.host
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Content-Type', 'application/json') 
            
            myDataTransaction.current_page++
            myDataTransaction.next_page_url = `http://${host}${path}/ListArea?page=${myDataTransaction.current_page}`
            myDataTransaction.prev_page_url = `http://${host}${path}/ListArea?page=${myDataTransaction.current_page-2}`
            console.log(`Request to : /ListArea ${myDataTransaction}` )
            res.end(JSON.stringify( myDataTransaction ))
        })       
    }
}