<template>
    <div id="overview">
        <a-row type="flex" :gutter="16" class="row">
            <a-col :span="8" >
                <a-card size="small" title="Latest News" class="row-left">
                    <router-link slot="extra" to="/news">more</router-link>
                    <ul class="news">
                        <li v-for="(item,n) in news" :key="n">
                            <a-tag :color="color[n]">No.{{n+1}}</a-tag>
                            <a-tooltip placement="topLeft">
                                <template slot="title">
                                    {{item}}
                                </template>
                                {{item}}
                            </a-tooltip>
                        </li>
                    </ul>
                </a-card>
            </a-col>
            <a-col :span="8" class="row-center">
                <div class="img-box">
                    <div>
                        <img id="group-img" src="../assets/group.jpg" alt="group photo"/>
                    </div>
                    <span class="tip">
                        group photo
                    </span>
                </div>
            </a-col>
            <a-col :span="8">
                <a-card size="small" title="General Interests" class="row-right">
                    <div class="content">
                        <div>The principal research activities of this laboratory include:</div>
                        <div>
                            (i) Novel polariton based optoelectronic devices: laser diodes, transistors
                        </div>
                        <div>
                            (ii) Nonliear properties of hybrid organic-inorganic semiconductor microcavities
                        </div>
                        <div>
                            (iii) Polariton quantum fluids and circuits
                        </div>
                        <div>
                            (iv) Polariton condensate lattices for quantum simulation
                        </div>
                    </div>
                </a-card>
                <a-card size="small" title="Prof. Pavlos Savvidis" class="row-right">
                    <div class="content">
                        <div>Professor</div>
                        <div>
                            Dept. of Material Science and Technology, Univ. of Crete
                        </div>
                        <div>
                            Microelectronics Research Group, IESL-FORTH
                        </div>
                    </div>
                </a-card>
            </a-col>
        </a-row>
        <div class="contact">
            <a-divider>Contact information</a-divider>
            <div>
                Microelectronics Research Group, FORTH/IESL
            </div>
            <div>
                Physics Department Building, 71110 Heraklion, Crete, Greece
            </div>
            <div>
                Office 1.Γ14 (Physics Bldg)
            </div>
            <div>
                Mon-Tue 11am - 13pm student office hours
            </div>
            <div>
                Phone work: +30 (2810) 394115 FAX: +30 (2810) 394106
            </div>
            <div>
                E-mail: psav(at)materials.uoc.gr     VCard
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Overview",
        data(){
            return {
                news:[
                    'December 2015 - Panagiotis Tsotsis left the group to join Greek Army!',
                    'July 2014 - Gao moving to Australia for a postdoc position!!',
                    'July 2014 - Review article by Pavlos Savvidis on electrically pumped polariton lasers appeared in Nature Photonics',
                    'April 2014 - Tingge Gao successfully defended his Ph.D. thesis. Congratulations, Dr. Gao!',
                    'March 2014 - Paper accepted in Nature Materials on Polariton mediated energy transfer between organic dyes in a strong-coupled optical microcavity',
                    'October 2011 - Pavlos receives Leverhulme fellowship for 1 year visit to University of Cambridge',

                ],
                color:['pink','red','orange','cyan','green','blue','purple']
            }
        }
    }
</script>

<style scoped lang="scss">
    #overview{
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: small;
        color: #0D5C8C;
        .row{
            padding: 20px;
            .row-left{
                min-height: 100%;
                .news{
                    text-align: left;
                    margin-top: 5px;
                    margin-bottom: 5px;
                    margin-left: -30px;
                    font-size: 14px;
                    list-style: none;
                    word-break: break-all;
                    li{
                        margin-bottom: 20px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
            .row-center{
                min-height: 100%;
                #group-img{
                    max-width: 100%;
                    aspect-ratio: auto 319 / 232;
                    margin-bottom: 10px;
                }
                .tip{
                    color: darkgrey;
                    margin: 10px;
                    padding-bottom: 5px;
                    border-bottom: #0D5C8C 5px solid;
                }
            }
            .row-right{
                .content{
                    text-align: left;
                    div{
                        padding: 5px;
                    }
                }
            }
        }
        .contact{
            padding: 0 20px 20px 20px;
        }
    }


</style>
