const Mock = require("mockjs")

let publications = [
    {
        title:'Circular Polariton Currents with Integer and Fractional Orbital Angular Momenta',
        link:'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013072',
        pdf:'https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.3.013072',
        authors:'E. S. Sedov, V. A. Lukoshkin, V. K. Kalevich, P. G. Savvidis, A. V. Kavokin',
        journal:'Phys. Rev. Research 3, 013072 (2021)',
        funding:''
    },
    {
        title:'Circular Polariton Currents with Integer and Fractional Orbital Angular Momenta',
        link:'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013072',
        pdf:'https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.3.013072',
        authors:'E. S. Sedov, V. A. Lukoshkin, V. K. Kalevich, P. G. Savvidis, A. V. Kavokin',
        journal:'Phys. Rev. Research 3, 013072 (2021)',
        funding:''
    },
    {
        title:'Circular Polariton Currents with Integer and Fractional Orbital Angular Momenta',
        link:'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013072',
        pdf:'https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.3.013072',
        authors:'E. S. Sedov, V. A. Lukoshkin, V. K. Kalevich, P. G. Savvidis, A. V. Kavokin',
        journal:'Phys. Rev. Research 3, 013072 (2021)',
        funding:''
    },
    {
        title:'Circular Polariton Currents with Integer and Fractional Orbital Angular Momenta',
        link:'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013072',
        pdf:'https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.3.013072',
        authors:'E. S. Sedov, V. A. Lukoshkin, V. K. Kalevich, P. G. Savvidis, A. V. Kavokin',
        journal:'Phys. Rev. Research 3, 013072 (2021)',
        funding:''
    },
    {
        title:'Circular Polariton Currents with Integer and Fractional Orbital Angular Momenta',
        link:'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013072',
        pdf:'https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.3.013072',
        authors:'E. S. Sedov, V. A. Lukoshkin, V. K. Kalevich, P. G. Savvidis, A. V. Kavokin',
        journal:'Phys. Rev. Research 3, 013072 (2021)',
        funding:''
    },
    {
        title:'Circular Polariton Currents with Integer and Fractional Orbital Angular Momenta',
        link:'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013072',
        pdf:'https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.3.013072',
        authors:'E. S. Sedov, V. A. Lukoshkin, V. K. Kalevich, P. G. Savvidis, A. V. Kavokin',
        journal:'Phys. Rev. Research 3, 013072 (2021)',
        funding:''
    },
    {
        title:'Circular Polariton Currents with Integer and Fractional Orbital Angular Momenta',
        link:'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013072',
        pdf:'https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.3.013072',
        authors:'E. S. Sedov, V. A. Lukoshkin, V. K. Kalevich, P. G. Savvidis, A. V. Kavokin',
        journal:'Phys. Rev. Research 3, 013072 (2021)',
        funding:''
    },
    {
        title:'Circular Polariton Currents with Integer and Fractional Orbital Angular Momenta',
        link:'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013072',
        pdf:'https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.3.013072',
        authors:'E. S. Sedov, V. A. Lukoshkin, V. K. Kalevich, P. G. Savvidis, A. V. Kavokin',
        journal:'Phys. Rev. Research 3, 013072 (2021)',
        funding:''
    },
    {
        title:'Circular Polariton Currents with Integer and Fractional Orbital Angular Momenta',
        link:'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013072',
        pdf:'https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.3.013072',
        authors:'E. S. Sedov, V. A. Lukoshkin, V. K. Kalevich, P. G. Savvidis, A. V. Kavokin',
        journal:'Phys. Rev. Research 3, 013072 (2021)',
        funding:''
    },
    {
        title:'Circular Polariton Currents with Integer and Fractional Orbital Angular Momenta',
        link:'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013072',
        pdf:'https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.3.013072',
        authors:'E. S. Sedov, V. A. Lukoshkin, V. K. Kalevich, P. G. Savvidis, A. V. Kavokin',
        journal:'Phys. Rev. Research 3, 013072 (2021)',
        funding:''
    },
    {
        title:'Circular Polariton Currents with Integer and Fractional Orbital Angular Momenta',
        link:'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013072',
        pdf:'https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.3.013072',
        authors:'E. S. Sedov, V. A. Lukoshkin, V. K. Kalevich, P. G. Savvidis, A. V. Kavokin',
        journal:'Phys. Rev. Research 3, 013072 (2021)',
        funding:''
    },
    {
        title:'Circular Polariton Currents with Integer and Fractional Orbital Angular Momenta',
        link:'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013072',
        pdf:'https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.3.013072',
        authors:'E. S. Sedov, V. A. Lukoshkin, V. K. Kalevich, P. G. Savvidis, A. V. Kavokin',
        journal:'Phys. Rev. Research 3, 013072 (2021)',
        funding:''
    },
    {
        title:'Circular Polariton Currents with Integer and Fractional Orbital Angular Momenta',
        link:'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.3.013072',
        pdf:'https://journals.aps.org/prresearch/pdf/10.1103/PhysRevResearch.3.013072',
        authors:'E. S. Sedov, V. A. Lukoshkin, V. K. Kalevich, P. G. Savvidis, A. V. Kavokin',
        journal:'Phys. Rev. Research 3, 013072 (2021)',
        funding:''
    },
]

Mock.mock('/mock/publications/list','get',()=>{
    return publications
})
