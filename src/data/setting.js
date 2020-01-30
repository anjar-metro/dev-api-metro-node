const mySettingUser = { 
    data: [
        { id: 1, no: 1, images: '/images/user-01.jpg', full_name : "Abu", email: 	"abu@metroney.com", phone:  	"085773671693", username:  	"abu.metroney",  kota: "All",  lokasi:	"ALL" , level: 	"management" 	} ,
        { id: 2, no: 2, images: '/images/user-02.jpg', full_name : "Aditya", email: 	"aditya@metroney.com", phone:  	"081293550014", username:  	"adit.metroney",  kota: "All",  lokasi:	"ALL" , level: 	"management" 	} ,
        { id: 3, no: 3, images: '/images/user-03.jpg', full_name : "Anjar", email: 	"anjar@metroney.com", phone:  	"08112447470", username:  	"anjar.w",  kota: "All",  lokasi:	"ALL" , level: 	"administrator" 	} ,
        { id: 4, no: 4, images: '/images/user-04.jpg', full_name : "annisa", email: 	"annisa@metroney.com", phone:  	"081214919850", username:  	"nisafitri",  kota: "All",  lokasi:	"ALL" , level: 	"management" 	} ,
        { id: 5, no: 5, images: '/images/user-05.jpg', full_name : "Arif", email: 	"arif@metroney.com", phone:  	"085795408692", username:  	"arif.metroney",  kota: "All",  lokasi:	"ALL" , level: 	"management" 	} ,
        { id: 6, no: 6, images: '/images/user-06.jpg', full_name : "budi", email: 	"budihartono@metroney.com", phone:  	"08118288818", username:  	"budihartono",  kota: "All",  lokasi:	"ALL" , level: 	"management" 	} ,
        { id: 7, no: 7, images: '/images/user-07.jpg', full_name : "Commercial", email: 	"Commercial@metroney.com", phone:  	"87654321", username:  	"Commercial",  kota: "All",  lokasi:	"ALL" , level: 	"management" 	} ,
        { id: 8, no: 8, images: '/images/user-08.jpg', full_name : "cpmtanggrang", email: 	"cpmtanggrang@jukir.co", phone:  	"082110880648", username:  	"cpmtanggrang", kota: "Tangerang Selatan",  lokasi:	"Ho Marqir" , level: 	"management" 	} ,
        { id: 9, no: 9, images: '/images/user-09.jpg', full_name : "Fahmi", email: 	"fahmiardi@jukir.co", phone:  	"081210028828", username:  	"fahmiardi", kota:	"Jakarta Pusat",  lokasi:	"Ho Marqir" , level: 	"administrator" 	} ,
        { id: 10, no: 10, images: '/images/user-10.jpg', full_name : "faranita", email: 	"farah@metroney.com", phone:  	"087877273017", username:  	"farahnita", kota:	"All",  lokasi:	"ALL" , level: 	"management" 	} ,
        { id: 11, no: 11, images: '/images/user-11.jpg', full_name : "Finace", email: 	"financemetroney@metroney.com", phone:  	"089673228287", username:  	"financemetroney", kota:	"All",  lokasi:	"ALL" , level: 	"management" 	} ,
        { id: 12, no: 12, images: '/images/user-12.jpg', full_name : "Jamal", email: 	"jamal@metroney.com", phone:  	"081316381986", username:  	"jamalnaser", 	kota: "All",  lokasi:	"ALL" , level: 	"management" 	} ,
        { id: 13, no: 13, images: '/images/user-13.jpg', full_name : "Keshia", email: 	"keshia@metroney.com", phone:  	"081298383802", username:  	"keshia.metroney", 	kota: "All" , lokasi:	"ALL" , level: 	"management" 	} ,
        { id: 14, no: 14, images: '/images/user-05.jpg', full_name : "Madya", email: 	"madya@metroney.com", phone:  	"081378677729", username:  	"madya.metroney", 	kota: "All",  lokasi:	"ALL" , level: 	"management" 	} ,
        { id: 15, no: 15, images: '/images/user-05.jpg', full_name : "PD Pasar", email: 	"pdpasarjaksel@jukir.co", phone:  	"081210028828", username:  	"pdpasarjaksel", kota: "Jakarta Selatan",  lokasi:	"Ho Marqir" , level: 	"manager kota" 	} ,
        { id: 16, no: 16, images: '/images/user-05.jpg', full_name : "Ramadhan JR", email: 	"ramadhan@jukir.co", phone:  	"089673228287", username:  	"ramadhan", kota: "All",  lokasi:	"Ho Marqir" , level: 	"administrator" 	} ,
        { id: 17, no: 17, images: '/images/user-05.jpg', full_name : "Vicky", email: 	"vicky@metroney.com", phone:  	"081321826686", username:  	"vicky92", kota : "All",  lokasi:	"Ho Marqir" , level: 	"administrator" 	} ,
        { id: 18, no: 18, images: '/images/user-05.jpg', full_name : "Yohanes", email: 	"yudhi@metroney.com", phone:  	"081219458617", username:  	"yyudhi", kota :	"Jakarta Selatan",  lokasi:	"Ho Marqir" , level: 	"administrator"}
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

const mySettingRole = {
    data: [
        { id: 1, no: 1, role_name: "admin site", aksi: null },
        { id: 2, no: 2, role_name: "administrator", aksi: null },
        { id: 3, no: 3, role_name: "bod", aksi: null },
        { id: 4, no: 4, role_name: "finance", aksi: null },
        { id: 5, no: 5, role_name: "hcd", aksi: null },
        { id: 6, no: 6, role_name: "logistic", aksi: null }
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

module.exports =  {
    bind: function(app) {
        const path = '/setting'
        const ListUser = '/ListUser' 
        const ListRole = '/ListRole' 

        let myDataUser = mySettingUser 
        let myDataRole = mySettingRole 

        // Users
        app.get(`${path}${ListUser}`, (req, res) => {
            const host = req.headers.host
            
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Content-Type', 'application/json')

            myDataUser.current_page++
            myDataUser.next_page_url = `http://${host}${path}${ListUser}?page=${myDataUser.current_page}`
            myDataUser.prev_page_url = `http://${host}${path}${ListUser}?page=${myDataUser.current_page - 2}`

            myDataUser.data.forEach(element => { 
                // console.log(element.images); 
                element.image_url = `http://${host}${ element.images }`
            }); 


            console.log(`Request to : /ListUser ${myDataUser}`)

            let filter = req.query.filter
            myDataUser.customFilter = filter
            // querystring.parse()
            res.end(JSON.stringify(myDataUser))
        })

        // Role
        app.get(`${path}${ListRole}`, (req, res) => {
            const host = req.headers.host
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Content-Type', 'application/json')

            myDataRole.current_page++
            myDataRole.next_page_url = `http://${host}${path}${ListRole}?page=${myDataRole.current_page}`
            myDataRole.prev_page_url = `http://${host}${path}${ListRole}?page=${myDataRole.current_page - 2}`
            
            console.log(`Request to : /ListRole ${myDataRole}`)

            let filter = req.query.filter
            myDataRole.customFilter = filter
            // querystring.parse()
            res.end(JSON.stringify(myDataRole))
        })
    }
}