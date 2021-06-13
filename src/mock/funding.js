const Mock = require("mockjs")

let fundings = [
    {
        text:'Greek Research Council, PENED 03, Principal investigator',
        start:'2004',
        end:'2007',
        amount:'80',
        data:[
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
    },
    {
        text:'Greek Research Council, PENED 03, Principal investigator',
        start:'2004',
        end:'2007',
        amount:'80',
        data:[
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
    },
    {
        text:'Greek Research Council, PENED 03, Principal investigator',
        start:'2004',
        end:'2007',
        amount:'80',
        data:[
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
    },
    {
        text:'Greek Research Council, PENED 03, Principal investigator',
        start:'2004',
        end:'2007',
        amount:'80',
        data:[
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
    },
    {
        text:'Greek Research Council, PENED 03, Principal investigator',
        start:'2004',
        end:'2007',
        amount:'80',
        data:[
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
    },
    {
        text:'Greek Research Council, PENED 03, Principal investigator',
        start:'2004',
        end:'2007',
        amount:'80',
        data:[
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
    },
    {
        text:'Greek Research Council, PENED 03, Principal investigator',
        start:'2004',
        end:'2007',
        amount:'80',
        data:[
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
    },
    {
        text:'Greek Research Council, PENED 03, Principal investigator',
        start:'2004',
        end:'2007',
        amount:'80',
        data:[
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
    },
    {
        text:'Greek Research Council, PENED 03, Principal investigator',
        start:'2004',
        end:'2007',
        amount:'80',
        data:[
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
    },
    {
        text:'Greek Research Council, PENED 03, Principal investigator',
        start:'2004',
        end:'2007',
        amount:'80',
        data:[
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
    },
    {
        text:'Greek Research Council, PENED 03, Principal investigator',
        start:'2004',
        end:'2007',
        amount:'80',
        data:[
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
    },
    {
        text:'Greek Research Council, PENED 03, Principal investigator',
        start:'2004',
        end:'2007',
        amount:'80',
        data:[
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
    },
    {
        text:'Greek Research Council, PENED 03, Principal investigator',
        start:'2004',
        end:'2007',
        amount:'80',
        data:[
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
    },
]


Mock.mock('/mock/funding/list','get',()=>{
    return fundings
})
