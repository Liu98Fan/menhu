<template>
    <div>
        <a-row type="flex" justify="center" v-login>
            <a-button class="edit-button" @click="insertPublication" type="primary" style="margin:10px">Insert publication</a-button>
        </a-row>
        <a-tag color="pink" >{{publications.length}} in total</a-tag>
        <a-divider><h2>publication List</h2></a-divider>
        <div class="list">
            <div v-for="(item,index) in publications" :key="index" class="publication-item">
                <a-tag :color="selectColor(index)" class="tag">{{index+1}}</a-tag>
                <div style="margin-left: 40px">
                    <div>
                        <a :href="item.link===''?'#':item.link" target="_blank" class="link">{{item.title}}</a>
                        <span v-if="item.pdf" ><a :href="item.pdf" target="_blank" ><a-tag class="pdf">pdf file</a-tag></a></span>
                    </div>
                    <div class="author">
                        {{item.author}}
                    </div >
                    <div class="journal">{{item.journal}}
                        <a-button type="link" @click="editPublication(item)" v-login>Edit</a-button>

                        <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="deletePublication(item)">
                            <template slot="title">
                                <p>Are you sure to delete this one?</p>
                            </template>
                            <a-button type="link"  v-login>Delete</a-button>
                        </a-popconfirm>

                    </div>
                </div>
            </div>
        </div>
        <a-modal v-model="editModal" :title="`${obj}`"  width="50%" okText="submit" okType="primary" @ok="submitForm('publicationForm')" @cancel="editModal=false">
            <a-form-model ref="publicationForm" :model="publicationForm" :rules="rules" v-bind="layout">
                <a-form-model-item has-feedback label="title" prop="title">
                    <a-textarea :row="3"   v-model="publicationForm.title"/>
                </a-form-model-item>
                <a-form-model-item has-feedback label="link" prop="link">
                    <a-input v-model="publicationForm.link"></a-input>
                </a-form-model-item>
                <a-form-model-item has-feedback label="pdf" prop="pdf">
                    <a-input v-model="publicationForm.pdf"></a-input>
                </a-form-model-item>
                <a-form-model-item has-feedback label="authors" prop="author">
                    <a-input v-model="publicationForm.author"></a-input>
                </a-form-model-item>
                <a-form-model-item has-feedback label="journal" prop="journal">
                    <a-input v-model="publicationForm.journal"></a-input>
                </a-form-model-item>
                <a-form-model-item has-feedback label="funding" prop="funding">
                    <a-select   v-model="publicationForm.funding"  mode="multiple">
                        <a-select-option :value="item.id" v-for="item in fundingList " :key="item.id">
                            {{item.text}}
                        </a-select-option>
                    </a-select>
                </a-form-model-item>
            </a-form-model>
        </a-modal>
    </div>
</template>

<script>/**
 @Date: 2021-05-22
 @Author: Mr Liu
 @Project: menhu
 **/

import {addPublication, deletePublication, editPublication, requestInfo} from "../axios/api/publications";
import {selectColor} from "../util/utils";
import { fundingList} from "../axios/api/funding";

    export default {
        name: "Publications",
        data() {
            return {
                publications:[],
                obj:"Insert publication",
                rules:{
                    title: [{ required:true, trigger: 'blur' }],
                    // link: [{ required:true, trigger: 'blur' }],
                    // pdf:[{ required:true, trigger: 'blur' }],
                    author:[{ required:true, trigger: 'blur' }],
                    journal:[{ required:true, trigger: 'blur' }],
                    funding:[{ required:true, trigger: 'blur' }],
                },
                layout: {
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                },
                publicationForm:{
                    title:'',
                    link:'',
                    pdf:'',
                    author:'',
                    journal:'',
                    funding:[],
                },
                fundingList:[],
                editModal:false,
            }
        },
        mounted() {
            this.loadInfo()
        },
        methods: {
            selectColor,
            loadInfo(){
                requestInfo().then(res=>{
                    if(res.success){
                        this.publications = res.data
                    }
                })
                fundingList().then(res=>{
                    if(res.success){
                        this.fundingList = res.data
                    }
                })
            },
            submitForm(formName){
                this.$refs[formName].validate(valid=>{
                    if(valid){
                        let formData = new FormData()
                        Object.keys(this.publicationForm).forEach(key=>{
                            formData.append(key,this.publicationForm[key])
                        })
                        if(this.obj === "Edit publication"){
                            editPublication(formData,this.publicationForm.id).then(res=>{
                                if(res.success){
                                    this.$message.success(res.message)
                                    this.cleanForm()
                                    this.loadInfo()
                                }else{
                                    this.$message.error(res.message)
                                }
                            })
                        }else{
                            addPublication(formData).then(res=>{
                                if(res.success){
                                    this.$message.success(res.message)
                                    this.cleanForm()
                                    this.loadInfo()
                                }else{
                                    this.$message.error(res.message)
                                }
                            })
                        }
                    }
                })

            },
            editPublication(data){
                console.log(data)
                this.editModal = true
                this.publicationForm = data
                let f = []
                data.funding.forEach(funding=>{
                    f.push(funding.id)
                })
                this.publicationForm.funding = f
                this.obj = "Edit publication"
            },
            deletePublication(publication){
                deletePublication(publication.id).then(res=>{
                    this.$message.success("success")
                    this.loadInfo()
                })
            },
            insertPublication(){
                this.cleanForm()
                this.editModal = true

            },
            cleanForm(){
                this.editModal = false
                this.publicationForm = {
                    title:'',
                    link:'',
                    pdf:'',
                    author:'',
                    journal:'',
                    funding:[],
                }
                this.obj = "Insert publication"
            },
        }
    }
</script>

<style scoped lang="scss">
    .list{
        text-align: left;
        font-size: medium;
        padding:40px;
        line-height: 40px;
        .publication-item{
            border: 1px solid #0D5C8C;;
            margin-bottom: 10px;
            padding: 10px 50px;
            background-color: linen;
            .tag{
                float: left;
                position: relative;
                top: 8px;
            }
            .link{
                font-weight: bold;
            }
            .pdf{
                margin-left: 15px;
                color: orangered;
                cursor: pointer;
            }
            .authors .journal{
            }
        }
    }
</style>
