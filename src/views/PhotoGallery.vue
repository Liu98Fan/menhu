<template>
    <div>
        <a-row type="flex" justify="center" v-login>
            <a-button class="edit-button" @click="insertPhoto" type="primary">Insert Photo</a-button>
        </a-row>
        <a-tabs :default-active-key="activeKey" size="large" @change="handleTab">
            <a-tab-pane :key="tab" :tab="tab" v-for="tab in Object.keys(photos)">
                <a-tag color="cyan">{{photos[tab].length}} in total</a-tag>
                <a-row type="flex" justify="start" :gutter="[20,20]" class="photo">
                    <a-col :span="8" v-for="(item,index) in photos[tab]" :key="item.title+index">
                        <img  :alt="item.title" :src="item.url"/>
                        <h3>{{item.title}}</h3>
                        <div>
                            <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="deletePhoto(item)">
                                <template slot="title">
                                    <p>Are you sure to delete this one?</p>
                                </template>
                                <a-button type="link" v-login class="card-button">Delete</a-button>
                            </a-popconfirm>
                        </div>
                    </a-col>
                </a-row>
            </a-tab-pane>
<!--            <a-tab-pane key="lab" tab="Lab photos">-->
<!--                <a-tag color="cyan">{{photos.length}} in total</a-tag>-->
<!--                <a-row type="flex" justify="center" :gutter="[20,20]" class="photo">-->
<!--                    <a-col :span="12" v-for="(item,index) in photos" :key="item.title+index">-->
<!--                        <img :alt="item.title" :src="item.img"/>-->
<!--                        <h3>{{item.title}}</h3>-->
<!--                    </a-col>-->
<!--                </a-row>-->
<!--            </a-tab-pane>-->
<!--            <a-tab-pane key="group" tab="Group photos">-->
<!--                <a-tag color="cyan">{{photos.length}} in total</a-tag>-->
<!--                <a-row type="flex" justify="center" :gutter="[20,20]" class="photo">-->
<!--                    <a-col :span="12" v-for="(item,index) in photos" :key="item.title+index">-->
<!--                        <img :alt="item.title" :src="item.img"/>-->
<!--                        <h3>{{item.title}}</h3>-->
<!--                    </a-col>-->
<!--                </a-row>-->
<!--            </a-tab-pane>-->
        </a-tabs>
        <a-modal :visible="editModal" :title="`${obj}`"  width="50%" okText="submit" okType="primary" @ok="submitForm('photoForm')" @cancel="editModal=false">
            <div>
                <a-form-model ref="photoForm" :model="photoForm" :rules="rules" v-bind="layout">
                    <a-form-model-item has-feedback label="title" prop="title">
                        <a-input   v-model="photoForm.title"/>
                    </a-form-model-item>
                    <a-form-model-item has-feedback label="photo" prop="file">
    <!--                    <img style="width: 100%" v-if="fileList.length===0" :src="photoForm.url" align="left" hspace="15" vspace="5" >-->
                        <a-upload  :file-list="fileList" :multiple="false" :remove="handleRemove" :before-upload="beforeUpload">
                            <a-button v-show="fileList.length<1"> <a-icon type="upload" /> Select File </a-button>
                        </a-upload>
                    </a-form-model-item>
                    <a-form-model-item has-feedback label="type" prop="type">
                        <a-select style="width: 120px" @change="handleChange" v-model="photoForm.type">
                            <a-select-option :value="0">
                                lab
                            </a-select-option>
                            <a-select-option :value="1">
                                group
                            </a-select-option>
                        </a-select>
                    </a-form-model-item>
                </a-form-model>
            </div>
        </a-modal>
    </div>
</template>

<script>/**
 @Date: 2021-05-22
 @Author: Mr Liu
 @Project: menhu
 **/

import {addPhoto, deletePhoto, requestPhotos} from "../axios/api/photoGallery";

    export default {
        name: "PhotoGallery",
        data() {
            return {
                photos:{},
                activeKey:'lab',
                editModal:false,
                obj:"upload photo",
                loading:false,
                photoForm:{
                    title:'',
                    type:'',
                    url:'',
                    file:'',
                },
                fileList:[],
                rules:{
                    title: [{ required:true, trigger: 'blur' }],
                    // file: [{ required:true, trigger: 'blur' }],
                    file: [{ required:true, trigger: 'blur' }],
                    type:[{ required:true, trigger: 'blur' }],
                },
                layout: {
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                },
            }
        },
        mounted() {
            this.loadPhoto()
        },
        methods: {
            loadPhoto(){
                requestPhotos().then(res=>{
                    if(res.success){
                        this.sortData(res.data)
                    }else{
                        this.$message.error(res.message)
                    }
                })
            },
            sortData(data){
                let result = {}
                data.forEach(item=>{
                    let flag = false
                        Object.keys(result).some(key=>{
                            if(key===item.type){
                                //命中
                                flag = true
                                result[key].push(item)
                                return flag
                            }
                        })
                    if(!flag){
                        result[item.type] = [item,]
                    }
                })
                this.photos = result
            },
            handleTab(key){
                this.activeKey = key
                // this.loadPhoto()
            },
            //remove img
            handleRemove(file){
                this.fileList = [];
            },
            //return false,manual upload
            beforeUpload(file){
                this.fileList = [file]
                this.photoForm.file = file
                return false
            },
            insertPhoto(){
              this.editModal = true
            },
            cleanForm(){
              this.editModal = false
              this.photoForm = {
                    title:'',
                    type:'',
                    url:'',
                  file:'',
                }
              this.fileList = []
            },
            submitForm(forName){
                this.$refs[forName].validate(valid=>{
                    if(valid){
                        let formData = new FormData()
                        Object.keys(this.photoForm).forEach(key=>{
                            formData.append(key,this.photoForm[key])
                        })
                        addPhoto(formData).then(res=>{
                            if(res.success){
                                this.$message.success(res.message)
                                this.loadPhoto()
                                this.cleanForm()
                            }else{
                                this.$message.error(res.message)
                            }
                        })
                    }
                })

            },
            handleChange(type){
                console.log(type)
                this.photoForm.type=type
            },
            deletePhoto(photo){
                deletePhoto(photo.id).then(res=>{
                    this.$message.success("success!")
                    this.loadPhoto()
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .photo{
        padding: 20px;
        img{
            width: 80%;
            height: 80%;
            max-width: 400px;
            max-height: 300px;
            box-shadow:0 0 9px 3px #999;
        }
        h3{
            font-weight: bold;
            color: #0D5C8C;
        }
    }

</style>
