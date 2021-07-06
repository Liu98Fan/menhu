<template>
    <div id="overview">
        <a-row type="flex" justify="center" v-login>
            <a-button  v-if="editFlag" class="edit-button" @click="setDefault" type="primary" style="margin:5px">default</a-button>
            <a-button v-if="!editFlag" class="edit-button" @click="editInfo" type="primary" style="margin:5px">Edit</a-button>
            <a-button v-else class="edit-button" @click="saveInfo" type="primary" style="margin:5px">save</a-button>
        </a-row>
        <a-row type="flex" :gutter="16" class="row">
            <a-col :span="8" >
                <a-card size="small" title="Latest News" class="row-left">
                    <router-link slot="extra" to="/news">more</router-link>
                    <ul class="news">
                        <li v-for="(item,n) in latestNews" :key="n">
                            <a-tag :color="color[n]">No.{{n+1}}</a-tag>
                            <a-tooltip placement="topLeft">
                                <template slot="title">
                                    {{item.text}}
                                </template>
                                【{{item.year}}-{{item.month}}】{{item.text}}
                            </a-tooltip>
                        </li>
                    </ul>
                </a-card>
            </a-col>
            <a-col :span="8" class="row-center">
                <div class="img-box">
                    <div>
                        <img id="group-img" :src="info.img" alt="group photo" v-if="info.img"/>
                        <a-empty v-else></a-empty>
                    </div>
                    <span class="tip" v-if="!editFlag">
                        {{info.imgName}}
                    </span>
                    <a-input v-model="info.imgName" style="width:200px" v-else></a-input>
                    <div v-if="editFlag"><a-button type="link" @click="selectImg">select</a-button></div>
                </div>
            </a-col>
            <a-col :span="8">
                <a-card size="small" title="General Interests" class="row-right">
                    <div class="content">
                        <div>The principal research activities of this laboratory include:
                            <a-button v-if="editFlag" style="float:right" type="link" @click="addInterest">add</a-button>
                        </div>
                        <div v-for="(item,index) in info.interest" :key="item">
                            <a-input-search @search="deleteInterest(index)" v-if="editFlag" v-model="info.interest[index]">
                                <a-button slot="enterButton">
                                    delete
                                </a-button>
                            </a-input-search>
                            <div v-else >{{item}}</div>
                        </div>
                    </div>
                </a-card>
                <a-card size="small" title="Prof. Pavlos Savvidis" class="row-right">
                    <div class="content">
                        <div v-for="(item,index) in info.prof" :key="item">
                            <a-input v-if="editFlag" v-model="info.prof[index]"/>
                            <div v-else >{{item}}</div>
                        </div>
                    </div>
                </a-card>
            </a-col>
        </a-row>
        <div class="contact">
            <a-divider>Contact information</a-divider>
            <div v-for="(item,index) in info.contact.info" :key="item">
                <a-input v-if="editFlag" v-model="info.contact.info[index]" style="max-width:730px"/>
                <div v-else >{{item}}</div>
            </div>
            <div>
                Phone work:
                <span v-if="editFlag">
                    <a-input style="max-width:300px" :value="info.contact.phone"></a-input>
                </span>
                <span v-else>{{info.contact.phone}}</span>
                    FAX:
                <span v-if="editFlag">
                    <a-input style="max-width:305px" :value="info.contact.fax"></a-input>
                </span>
                <span v-else>{{info.contact.fax}}</span>
            </div>
            <div>
                E-mail:
                <a-input v-if="editFlag" v-model="info.contact.email" style="max-width:680px"/>
                <div v-else >{{info.contact.email}}</div>

            </div>
        </div>
        <a-modal :visible="editImg" title="select picture" width="50%" okText="ok" okType="primary" @ok="editImg=false" @cancel="editImg=false">
            <a-row :gutter="20">
                <a-radio-group name="radioGroup" v-model="info.img">
                <a-col :span="8" v-for="item in photos" :key="item.id">
                    <a-card hoverable  >
                        <img
                                slot="cover"
                                :alt="item.title"
                                :src="item.url"
                                style="max-width: 300px;
            max-height: 200px;"
                        />
                        <a-card-meta>
                            <template slot="description">
                                <div style="text-align: center">
                                    <a-radio :value="item.url" >
                                    {{item.title}}
                                </a-radio></div>
                            </template>
                        </a-card-meta>
                    </a-card>
                </a-col>
                </a-radio-group>
            </a-row>

        </a-modal>
    </div>
</template>

<script>
    import {requestInfo, saveInfo} from "../axios/api/overview";
    import {latestNews} from "../axios/api/news";
    import {requestPhotos} from "../axios/api/photoGallery";

    export default {
        name: "Overview",
        data(){
            return {
                info:{},
                latestNews:[],
                color:['pink','red','orange','cyan','green','blue','purple'],
                editFlag:false,
                back:{},
                editImg:false,
                photos:[],
            }
        },
        mounted() {
            this.loadInfo()
        },
        methods:{
            loadInfo(){
                requestInfo().then(res=>{
                    this.info = res.data
                    this.back = res.data
                })

                latestNews(7).then(res=>{
                    this.latestNews = res.data
                })

                requestPhotos().then(res=>{
                    this.photos = res.data
                })
            },
            editInfo(){
                this.editFlag = true
            },
            saveInfo(){
                saveInfo(this.info).then(res=>{
                    if(res.success){
                        this.$message.success(res.message)
                        this.loadInfo()
                        this.editFlag = false
                    }else{
                        this.$message.error(res.message)
                    }
                })

            },
            deleteInterest(index){
                let interest = this.info.interest
                interest.splice(index,1)
                this.$set(this.info,"interest",interest)
            },
            addInterest(){
                this.$set(this.info,"interest",[...this.info.interest,""])
            },
            setDefault(){
                this.loadInfo()
            },
            selectImg(){
                this.editImg = true

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
