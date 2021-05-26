const Mock = require("mockjs")

let labPhoto = [
    {
        title:'Ultracold',
        img:'https://quantopt.materials.uoc.gr/images/lab/lab_6.jpg',
    },
    {
        title:'Lasers',
        img:'https://quantopt.materials.uoc.gr/images/lab/lab_7.jpg',
    },
    {
        title:'Ultracold',
        img:'https://quantopt.materials.uoc.gr/images/lab/lab_6.jpg',
    },
    {
        title:'Lasers',
        img:'https://quantopt.materials.uoc.gr/images/lab/lab_7.jpg',
    },

]

let groupPhoto = [
    {
        title:'Group photo, 2012',
        img:'https://quantopt.materials.uoc.gr/images/lab/group_1.jpg',
    },
    {
        title:'Party time!',
        img:'https://quantopt.materials.uoc.gr/images/lab/group_2.jpg',
    },
]

Mock.mock('/mock/photo/lab','get',()=>{
    return labPhoto
})
Mock.mock('/mock/photo/group','get',()=>{
    return groupPhoto
})
