const Mock = require("mockjs")
let news = [
    {
        text:'Paper on organic microcavities accepted in Appl. Phys. Lett.',
        month:'September',
        year:'2011'
    },
    {
        text:'Gao moving to Australia for a postdoc position!!',
        month:'July ',
        year:'2014'
    },
    {
        text:'Review article by Pavlos Savvidis on electrically pumped polariton lasers appeared in Nature Photonics',
        month:'September',
        year:'2011'
    },
    {
        text:'Tingge Gao successfully defended his Ph.D. thesis. Congratulations, Dr. Gao!',
        month:'July ',
        year:'2014'
    },
    {
        text:'Paper accepted in Nature Materials on Polariton mediated energy transfer between organic dyes in a strong-coupled optical microcavity',
        month:'September',
        year:'2011'
    },
    {
        text:'Pavlos receives Leverhulme fellowship for 1 year visit to University of Cambridge',
        month:'July ',
        year:'2014'
    },
    {
        text:'Pavlos promoted to Associate Professor',
        month:'September',
        year:'2011'
    },
    {
        text:'Alexandros Tzimis started his PhD and joined our group',
        month:'July ',
        year:'2014'
    },
    {
        text:' Paper on All-dielectric GaN microcavity: Strong coupling and lasing at room temperature accepted in Appl. Phys. Lett.',
        month:'September',
        year:'2011'
    },
    {
        text:'Paper on organic microcavities accepted in Appl. Phys. Lett.',
        month:'September',
        year:'2011'
    },
    {
        text:'Gao moving to Australia for a postdoc position!!',
        month:'July ',
        year:'2014'
    },
    {
        text:'Review article by Pavlos Savvidis on electrically pumped polariton lasers appeared in Nature Photonics',
        month:'September',
        year:'2011'
    },
    {
        text:'Tingge Gao successfully defended his Ph.D. thesis. Congratulations, Dr. Gao!',
        month:'July ',
        year:'2014'
    },
    {
        text:'Paper accepted in Nature Materials on Polariton mediated energy transfer between organic dyes in a strong-coupled optical microcavity',
        month:'September',
        year:'2011'
    },
    {
        text:'Pavlos receives Leverhulme fellowship for 1 year visit to University of Cambridge',
        month:'July ',
        year:'2014'
    },
    {
        text:'Pavlos promoted to Associate Professor',
        month:'September',
        year:'2011'
    },
    {
        text:'Alexandros Tzimis started his PhD and joined our group',
        month:'July ',
        year:'2014'
    },
    {
        text:' Paper on All-dielectric GaN microcavity: Strong coupling and lasing at room temperature accepted in Appl. Phys. Lett.',
        month:'September',
        year:'2011'
    },
]



Mock.mock('/mock/news/list','get',()=>{
    return news
})
