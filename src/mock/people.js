const Mock = require("mockjs")
let people = {
    professor:{
        name:'Pavlos Savvidis',
        identity:'Group leader',
        description:[
            'Associate Professor',
            'Department of Materials Science and Technology',
            'Microelectronics Research Group, IESL-FORTH',
            'Heraklion, Crete, Greece',
        ],
        img:'',
        directions:[
            'Prototype polaritonic devices',
            'Quantum Technologies',
        ],
        phone:'',
        fax:'',
        email:'',
    },
    students:[
        {
            name:'Manolis Mavrotsoupakis',
            identity:'PhD student',
            description:['Research Assistant Westlake University'],
            img:'',
            directions:[
                'Prototype polaritonic devices',
                'Quantum Technologies',
            ],
            tel:'+30 2810394130',
            fax:'',
            email:'eldridge@physics.uoc.gr',
        },
        {
            name:'Manolis Mavrotsoupakis',
            identity:'PhD student',
            description:[],
            img:'',
            directions:[
                'Prototype polaritonic devices',
                'Quantum Technologies',
            ],
            tel:'',
            fax:'',
            email:'',
        },
        {
            name:'Manolis Mavrotsoupakis',
            identity:'PhD student',
            description:[],
            img:'',
            directions:[
                'Prototype polaritonic devices',
                'Quantum Technologies',
            ],
            tel:'',
            fax:'',
            email:'',
        },
        {
            name:'Manolis Mavrotsoupakis',
            identity:'PhD student',
            description:[],
            img:'',
            directions:[
                'Prototype polaritonic devices',
                'Quantum Technologies',
            ],
            tel:'',
            fax:'',
            email:'',
        },
        {
            name:'Manolis Mavrotsoupakis',
            identity:'PhD student',
            description:[],
            img:'',
            directions:[
                'Prototype polaritonic devices',
                'Quantum Technologies',
            ],
            tel:'',
            fax:'',
            email:'',
        },
        {
            name:'Manolis Mavrotsoupakis',
            identity:'PhD student',
            description:[],
            img:'',
            directions:[
                'Prototype polaritonic devices',
                'Quantum Technologies',
            ],
            tel:'',
            fax:'',
            email:'',
        },
    ]
}

Mock.mock('/mock/people/info','get',()=>{
    return people
})
