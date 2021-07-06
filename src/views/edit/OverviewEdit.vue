<template>
    <div id="overview">
        <a-row type="flex" :gutter="16" class="row">
            <a-col :span="8" >
                <a-card size="small" title="Latest News" class="row-left">
                    <router-link slot="extra" to="/news">more</router-link>
                    <ul class="news">
                        <li v-for="(item,n) in info.news" :key="n">
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
                    <div class="clearfix">
                        <a-upload
                                action="/edit/overview/upload"
                                list-type="picture-card"
                                :file-list="fileList"
                                @preview="handlePreview"
                                @change="handleChange"
                        >
                            <div v-if="fileList.length < 1">
                                <a-icon type="plus" />
                                <div class="ant-upload-text">
                                    Upload
                                </div>
                            </div>
                        </a-upload>
<!--                        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">-->
<!--                            <img alt="example" style="width: 100%" :src="previewImage" />-->
<!--                        </a-modal>-->
                    </div>
                    <div>
                        <img id="group-img" src="../../assets/group.jpg" alt="group photo"/>
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
                        <div v-for="item in info.interest" :key="item">
                            {{item}}
                        </div>
                    </div>
                </a-card>
                <a-card size="small" title="Prof. Pavlos Savvidis" class="row-right">
                    <div class="content">
                        <div v-for="item in info.prof" :key="item">{{item}}</div>
                    </div>
                </a-card>
            </a-col>
        </a-row>
        <div class="contact">
            <a-divider>Contact information</a-divider>
            <div v-for="item in info.contact.info" :key="item">
                {{item}}
            </div>
            <div>
                Phone work: {{info.contact.phone}} FAX: {{info.contact.fax}}
            </div>
            <div>
                E-mail: {{info.contact.email}}
            </div>
        </div>
    </div>
</template>

<script>
    import {requestInfo} from "../../axios/api/overview";

    export default {
        name: "Overview",
        data(){
            return {
                info:{},
                color:['pink','red','orange','cyan','green','blue','purple'],
                fileList:[

                ],
                previewVisible:false,
                previewImage:'',
            }
        },
        mounted() {
            this.loadInfo()
        },
        methods:{
            loadInfo(){
                requestInfo().then(res=>{
                    this.info = res
                })
            },
            //preview img
            handlePreview(file){
                this.$message.info("handlePreview")
                this.previewVisible = true
                this.previewImage = file.url
                console.log(file)
            },
            handleChange(file){
                console.log(file)
                this.$message.info("handleChange")
            },
            handleCancel(){
                this.previewImage = ''
                this.previewVisible = true
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
