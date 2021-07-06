const Mock = require("mockjs")
// let overview = {
//     interest:[
//         '(i) Novel polariton based optoelectronic devices: laser diodes, transistors',
//         '(ii) Nonliear properties of hybrid organic-inorganic semiconductor microcavities',
//         '(iii) Polariton quantum fluids and circuits',
//         '(iv) Polariton condensate lattices for quantum simulation',
//     ],
//     prof:[
//         'Professor',
//         'Dept. of Material Science and Technology, Univ. of Crete',
//         'Microelectronics Research Group, IESL-FORTH',
//     ],
//     contact:{
//         phone:'+30 (2810) 394115',fax:'+30 (2810) 394106',email:'psav(at)materials.uoc.gr',info:[
//             'Microelectronics Research Group, FORTH/IESL',
//             'Physics Department Building, 71110 Heraklion, Crete, Greece',
//             'Office 1.Γ14 (Physics Bldg)',
//             'Mon-Tue 11am - 13pm student office hours',
//         ],//4条
//     }
//
// }
let news = [
    'December 2015 - Panagiotis Tsotsis left the group to join Greek Army!',
    'July 2014 - Gao moving to Australia for a postdoc position!!',
    'July 2014 - Review article by Pavlos Savvidis on electrically pumped polariton lasers appeared in Nature Photonics',
    'April 2014 - Tingge Gao successfully defended his Ph.D. thesis. Congratulations, Dr. Gao!',
    'March 2014 - Paper accepted in Nature Materials on Polariton mediated energy transfer between organic dyes in a strong-coupled optical microcavity',
    'October 2011 - Pavlos receives Leverhulme fellowship for 1 year visit to University of Cambridge',
] //新闻，6条
let interest = [
    '(i) Novel polariton based optoelectronic devices: laser diodes, transistors',
    '(ii) Nonliear properties of hybrid organic-inorganic semiconductor microcavities',
    '(iii) Polariton quantum fluids and circuits',
    '(iv) Polariton condensate lattices for quantum simulation',
]//方向，4条
let prof = [
    'Professor',
    'Dept. of Material Science and Technology, Univ. of Crete',
    'Microelectronics Research Group, IESL-FORTH',
]//教授信息，3条
let contact = {
    phone:'+30 (2810) 394115',fax:'+30 (2810) 394106',email:'psav(at)materials.uoc.gr',info:[
        'Microelectronics Research Group, FORTH/IESL',
        'Physics Department Building, 71110 Heraklion, Crete, Greece',
        'Office 1.Γ14 (Physics Bldg)',
        'Mon-Tue 11am - 13pm student office hours',
    ],//4条
}
Mock.mock('/mock/overview/info','get',()=>{
    return {
        news,interest,prof,contact
    }
})

Mock.mock('/mock/edit/overview/upload','post',(param)=>{
    console.log(param)
})
