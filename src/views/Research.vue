<template>
    <div id="research">
        <h1>Scientific directions</h1>
        <div class="research-box" >
            <a-card  v-for="(item,index) in researchList" :key="index" :loading="loading" hoverable class="research-card">
                <div slot="title" class="title">{{item.title}}</div>
                <img src="../assets/research1.jpg" align="left" hspace="15" vspace="5" :alt="item.title">
                <p>{{item.shortDescription}}<a-button type="link" @click="showLong(index)">{{!showMore[index]?'show more':'show less'}}</a-button></p>

                <p v-show="showMore[index]">{{item.longDescription}}</p>
                <div class="member">
                    <span >Participating members:</span>  <a-tag class="tag" v-for="(member,index) in item.members" :key="index">{{member.name}}</a-tag>
                </div>
            </a-card>
        </div>
    </div>
</template>

<script>
    //TODO: showMore和showLess应当做动画，比如：淡入淡出。 可以和页面切换时候动画留到最后一起做。
    export default {
        name: "Research",
        data(){
            return {
                researchList:[
                    {
                        title:'Semiconductor heterostructures & nanostructures',
                        img:'../assets/research1.jpg',
                        shortDescription:'Semiconductor microcavities are nanostructures grown by Molecular Beam Epitaxy, which consist of either GaAs or InGaAs Quantum Wells embedded between two Bragg mirrors forming a planar Fabry-Perot cavity. In such structures, exciton polaritons result from the strong coupling between a resonant optical cavity mode and a confined excitons. The bosonic nature of exciton polaritons inherited from their light–matter composition is responsible for observations of stimulated scattering, amplification, condensation and lasing of polaritons. In contrast to conventional lasing, where coherent light emission is driven by stimulated photon emission, polariton lasing is achieved through the stimulated scattering of polaritons and the formation of a condensate without the need for population inversion. ',
                        longDescription:'Therefore, polariton lasing promises two orders of magnitude lower threshold than conventional photon lasing and a new generation of ultralow threshold laser devices. In addition, polariton condensates have been shown to exhibit similarities to atomic Bose–Einstein condensates (BECs), displaying a spontaneous build-up of long-range spatial coherence and a thermalized distribution within the population. Unlike atomic BECs, polariton condensation can be achieved at high temperatures due to the very small polariton effective mass. Major prerequisite to all the above observations is the ability to fabricate state of the art MBE grown high finesse microcavity structures allowing very long polariton lifetimes capable of supporting efficient relaxations of polaritons to the ground state and formation of condensate. Other important challenges include growth of p-i-n diode microcavities for efficient electrical injection of carriers while preserving finesse of the grown structures. Quantized polaritons without condensation, P Cristofolini, Z. Hatzopoulos, PG Savvidis, and JJ Baumberg, Phys. Rev. Let. 121, 067401 (2018) An attojoule electrical spin-switch based on optically trapped polariton condensates, A Dreismann, H Ohadi, Y.V.I. Redondo, R. Balili, Y Rubo, S.I. Tsintzos, G. Deligeorgis, Z. Hatzopoulos, P.G. Savvidis, J.J. Baumberg, Nature Materials 15, 1074 (2016) Strong coupling and stimulated emission in single parabolic quantum well microcavity for terahertz cascade, A Tzimis, A.Trifonov, G Christmann, SI Tsintzos, Z Hatzopoulos, I Ignatiev, AV Kavokin, PG Savvidis, Appl. Phys. Lett. 107, 101101 (2015) A GaAs polariton light-emitting diode operating near room temperature, S. I. Tsintzos, N. T. Pelekanos, G. Konstantinidis, Z. Hatzopoulos, P. G. Savvidis, Nature 453, 372 (2008)',
                        members:[
                            {name:'Pavlos Savvidis'},
                            {name:'Simeon Tsintzos'},
                            {name:'Pavlos Savvidis'},
                            {name:'Simeon Tsintzos'},
                            {name:'Pavlos Savvidis'},
                            {name:'Simeon Tsintzos'},
                        ]
                    },
                    {
                        title:'Semiconductor heterostructures & nanostructures',
                        img:'../assets/research1.jpg',
                        shortDescription:'Semiconductor microcavities are nanostructures grown by Molecular Beam Epitaxy, which consist of either GaAs or InGaAs Quantum Wells embedded between two Bragg mirrors forming a planar Fabry-Perot cavity. In such structures, exciton polaritons result from the strong coupling between a resonant optical cavity mode and a confined excitons. The bosonic nature of exciton polaritons inherited from their light–matter composition is responsible for observations of stimulated scattering, amplification, condensation and lasing of polaritons. In contrast to conventional lasing, where coherent light emission is driven by stimulated photon emission, polariton lasing is achieved through the stimulated scattering of polaritons and the formation of a condensate without the need for population inversion. ',
                        longDescription:'Therefore, polariton lasing promises two orders of magnitude lower threshold than conventional photon lasing and a new generation of ultralow threshold laser devices. In addition, polariton condensates have been shown to exhibit similarities to atomic Bose–Einstein condensates (BECs), displaying a spontaneous build-up of long-range spatial coherence and a thermalized distribution within the population. Unlike atomic BECs, polariton condensation can be achieved at high temperatures due to the very small polariton effective mass. Major prerequisite to all the above observations is the ability to fabricate state of the art MBE grown high finesse microcavity structures allowing very long polariton lifetimes capable of supporting efficient relaxations of polaritons to the ground state and formation of condensate. Other important challenges include growth of p-i-n diode microcavities for efficient electrical injection of carriers while preserving finesse of the grown structures. Quantized polaritons without condensation, P Cristofolini, Z. Hatzopoulos, PG Savvidis, and JJ Baumberg, Phys. Rev. Let. 121, 067401 (2018) An attojoule electrical spin-switch based on optically trapped polariton condensates, A Dreismann, H Ohadi, Y.V.I. Redondo, R. Balili, Y Rubo, S.I. Tsintzos, G. Deligeorgis, Z. Hatzopoulos, P.G. Savvidis, J.J. Baumberg, Nature Materials 15, 1074 (2016) Strong coupling and stimulated emission in single parabolic quantum well microcavity for terahertz cascade, A Tzimis, A.Trifonov, G Christmann, SI Tsintzos, Z Hatzopoulos, I Ignatiev, AV Kavokin, PG Savvidis, Appl. Phys. Lett. 107, 101101 (2015) A GaAs polariton light-emitting diode operating near room temperature, S. I. Tsintzos, N. T. Pelekanos, G. Konstantinidis, Z. Hatzopoulos, P. G. Savvidis, Nature 453, 372 (2008)',
                        members:[
                            {name:'Pavlos Savvidis'},
                            {name:'Simeon Tsintzos'},
                            {name:'Pavlos Savvidis'},
                            {name:'Simeon Tsintzos'},
                            {name:'Pavlos Savvidis'},
                            {name:'Simeon Tsintzos'},
                        ]
                    },
                    {
                        title:'Semiconductor heterostructures & nanostructures',
                        img:'../assets/research1.jpg',
                        shortDescription:'Semiconductor microcavities are nanostructures grown by Molecular Beam Epitaxy, which consist of either GaAs or InGaAs Quantum Wells embedded between two Bragg mirrors forming a planar Fabry-Perot cavity. In such structures, exciton polaritons result from the strong coupling between a resonant optical cavity mode and a confined excitons. The bosonic nature of exciton polaritons inherited from their light–matter composition is responsible for observations of stimulated scattering, amplification, condensation and lasing of polaritons. In contrast to conventional lasing, where coherent light emission is driven by stimulated photon emission, polariton lasing is achieved through the stimulated scattering of polaritons and the formation of a condensate without the need for population inversion. ',
                        longDescription:'Therefore, polariton lasing promises two orders of magnitude lower threshold than conventional photon lasing and a new generation of ultralow threshold laser devices. In addition, polariton condensates have been shown to exhibit similarities to atomic Bose–Einstein condensates (BECs), displaying a spontaneous build-up of long-range spatial coherence and a thermalized distribution within the population. Unlike atomic BECs, polariton condensation can be achieved at high temperatures due to the very small polariton effective mass. Major prerequisite to all the above observations is the ability to fabricate state of the art MBE grown high finesse microcavity structures allowing very long polariton lifetimes capable of supporting efficient relaxations of polaritons to the ground state and formation of condensate. Other important challenges include growth of p-i-n diode microcavities for efficient electrical injection of carriers while preserving finesse of the grown structures. Quantized polaritons without condensation, P Cristofolini, Z. Hatzopoulos, PG Savvidis, and JJ Baumberg, Phys. Rev. Let. 121, 067401 (2018) An attojoule electrical spin-switch based on optically trapped polariton condensates, A Dreismann, H Ohadi, Y.V.I. Redondo, R. Balili, Y Rubo, S.I. Tsintzos, G. Deligeorgis, Z. Hatzopoulos, P.G. Savvidis, J.J. Baumberg, Nature Materials 15, 1074 (2016) Strong coupling and stimulated emission in single parabolic quantum well microcavity for terahertz cascade, A Tzimis, A.Trifonov, G Christmann, SI Tsintzos, Z Hatzopoulos, I Ignatiev, AV Kavokin, PG Savvidis, Appl. Phys. Lett. 107, 101101 (2015) A GaAs polariton light-emitting diode operating near room temperature, S. I. Tsintzos, N. T. Pelekanos, G. Konstantinidis, Z. Hatzopoulos, P. G. Savvidis, Nature 453, 372 (2008)',
                        members:[
                            {name:'Pavlos Savvidis'},
                            {name:'Simeon Tsintzos'},
                            {name:'Pavlos Savvidis'},
                            {name:'Simeon Tsintzos'},
                            {name:'Pavlos Savvidis'},
                            {name:'Simeon Tsintzos'},
                        ]
                    }
                ],
                showMore:[false],
                loading:false,
            }
        },
        methods:{
            showLong(index){
                this.$set(this.showMore,index,!this.showMore[index])
            }
        }
    }
</script>

<style scoped lang="scss" >
    #research{
        .research-box{
            .research-card{
                /*border:2px solid ;*/
                background-color: linen;
                margin-bottom: 20px;
            }
            padding: 20px;
            .title{
                font-weight: bolder;
            }

            img{
                width: 240px;
                aspect-ratio: auto 160 / 120;
                height: 180px;
                border-top-width: 1px;
                border-right-width: 1px;
                border-bottom-width: 1px;
                border-left-width: 1px;
                border-top-style: solid;
                border-right-style: solid;
                border-bottom-style: solid;
                border-left-style: solid;
            }
            p{
                line-height: 30px;
                /*text-align: left;*/
                text-align: justify;
                text-justify: inter-ideograph;/*IE*/
            }
            .member{
                font-weight: bolder;
                text-align: left;
                .tag{
                    margin-bottom: 10px;
                }
            }
        }

    }
</style>
