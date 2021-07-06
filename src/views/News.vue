<template>
    <div class="container">
        <a-row type="flex" justify="center" v-login>
            <a-button class="edit-button" @click="edit('Insert')" :disabled="buttonDisabled('Insert')">Insert</a-button>
            <a-button class="edit-button" @click="edit('Edit')" :disabled="buttonDisabled('Edit')">Edit</a-button>
<!--            <a-button class="edit-button" @click="edit('Update')" :disabled="buttonDisabled('Update')">Update</a-button>-->
            <a-button class="edit-button" @click="edit('Delete')" :disabled="buttonDisabled('Delete')">Delete</a-button>
            <a-button class="edit-button" @click="closeEdit" type="link" v-show="display">close</a-button>
            <a-divider></a-divider>
        </a-row>

        <div><h2>News List</h2><a-tag color="green">{{pagination.total}} in total</a-tag></div>
        <ul>
            <li v-for="(item,index) in news" :key="index">
                <span>{{item.month}}</span>
                <span>{{item.year}}</span>
                <span>-</span>
                <span>{{item.text}}</span>

                <a-button type="link" v-show="buttonDisabled('Edit')" @click="editNews(item)">Edit</a-button>

                <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="deleteNews(item)">
                    <template slot="title">
                        <p>Are you sure to delete this news?</p>
                    </template>
                    <a-button type="link" v-show="buttonDisabled('Delete')" >Delete</a-button>
                </a-popconfirm>


            </li>
        </ul>
        <a-pagination style="text-align: center" v-model="current" :total="pagination.total" :pageSize="pagination.limit" show-less-items @change="pageChange"/>

<!--        Insert Modal-->
        <a-modal :visible="modalDisplay" title="Insert a New" width="50%" okText="submit" okType="primary" @ok="submitForm" @cancel="cancelForm">
            <a-form-model ref="newsForm" :model="newsForm" :rules="rules" v-bind="layout">
                <a-form-model-item has-feedback label="News text" prop="text">
                    <a-textarea  :rows="4" v-model="newsForm.text"/>
                </a-form-model-item>
                <a-form-model-item has-feedback label="Month" prop="month">
                    <a-select
                            style="width: 220px"
                            @change="handleMonthChange"
                            v-model="newsForm.month"
                    >
                        <a-select-option v-for="item in months" :value="item" :key="item">
                            {{item}}
                        </a-select-option>
                    </a-select>
                </a-form-model-item>
                <a-form-model-item has-feedback label="Year" prop="year">
                    <a-select
                            style="width: 220px"
                            @change="handleYearChange"
                            v-model="newsForm.year"
                    >
                        <a-select-option v-for="item in years" :value="item" :key="item">
                            {{item}}
                        </a-select-option>
                    </a-select>
                </a-form-model-item>
                <a-form-model-item has-feedback label="Main news" prop="main">
                    <a-switch  @change="handleMainChange"  />
                </a-form-model-item>
            </a-form-model>
        </a-modal>
        <a-modal :visible="modalDisplayUpdate" title="Update  News" width="50%" okText="submit" okType="primary" @ok="updateForm" @cancel="modalDisplayUpdate=false">
            <a-form-model ref="editForm" :model="editForm" :rules="rules" v-bind="layout">
                <a-form-model-item has-feedback label="News text" prop="text">
                    <a-textarea  :rows="4" v-model="editForm.text"/>
                </a-form-model-item>
                <a-form-model-item has-feedback label="Month" prop="month">
                    <a-select
                            style="width: 220px"
                            @change="handleMonthChange"
                            v-model="editForm.month"
                    >
                        <a-select-option v-for="item in months" :value="item" :key="item">
                            {{item}}
                        </a-select-option>
                    </a-select>
                </a-form-model-item>
                <a-form-model-item has-feedback label="Year" prop="year">
                    <a-select
                            style="width: 220px"
                            @change="handleYearChange"
                            v-model="editForm.year"
                    >
                        <a-select-option v-for="item in years" :value="item" :key="item">
                            {{item}}
                        </a-select-option>
                    </a-select>
                </a-form-model-item>
                <a-form-model-item has-feedback label="Main news" prop="main">
                    <a-switch  @change="handleMainChange"  v-model="editForm.main"/>
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

import {addNews, deleteNews, requestInfo, updateNews} from "../axios/api/news";
import {monthList,yearList} from "../util/utils";

export default {
        name: "News",
        data() {
            return {
                news:[],
                direction:'',
                display:false,
                modalDisplay:false,
                modalDisplayUpdate:false,
                layout: {
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                },
                newsForm:{
                    text:'',
                    month:'',
                    year:'',
                    main:false,
                },
                editForm:{
                    id:0,
                    text:'',
                    month:'',
                    year:'',
                    main:false,
                },
                rules: {
                    text: [{ required:true, trigger: 'blur' }],
                    month: [{ required:true, trigger: 'blur' }],
                    year: [{ required:true, trigger: 'blur' }],
                },
                pagination:{
                    offset:0,
                    limit:10,
                    total:0,
                },
                current:1,
            }
        },
        mounted() {
            this.loadInfo()
        },
        computed:{
            buttonDisabled(){
                return (direction)=>{
                    return this.direction === direction
                }
            },
            months(){
                return monthList()
            },
            years(){
                return yearList()
            }
        },
        watch:{
          current(newVal){
              this.pagination.offset = (newVal-1)*this.pagination.limit
          }
        },
        methods: {
            loadInfo(){
                requestInfo(this.pagination).then(res=>{
                    this.news = res.data
                    this.pagination.total = res.count
                })
            },
            edit(direction){
                this.direction = direction
                this.display = true
                if(direction === 'Insert'){
                    this.modalDisplay = true
                }
            },
            closeEdit(){
                this.display = false
                this.direction = ''
            },
            //modal
            handleMonthChange(value){
                console.log("month change:",value)
                this.newsForm.month = value
            },
            handleYearChange(value){
                console.log("year change:",value)
                this.newsForm.year = value
            },
            handleMainChange(value){
                console.log("month change:",value)
                this.newsForm.main = value
            },
            //form
            submitForm(){
                this.$refs['newsForm'].validate(valid => {
                    if (valid) {
                        //validate success,then request data
                        // this.$message.success('ok')
                        addNews(this.newsForm).then(res=>{
                            if(res.success){
                                this.$message.success(res.message)
                                this.cancelForm()
                                this.loadInfo()
                            }else{
                                this.$message.error(res.message)
                            }
                        })
                    } else {
                        this.$message.error('error!please check your form.')
                    }
                });
            },
            cancelForm(){
                this.modalDisplay = false
                this.display = false
                this.direction = ''
            },
            pageChange(page,pageSize){
                this.pagination.offset = (page-1)*pageSize
                this.pagination.limit = pageSize
                this.loadInfo()
            },
            //CRUD
            deleteNews(news){
                deleteNews(news.id).then(res=>{
                    this.$message.success(res.message)
                    this.loadInfo()
                    this.cancelForm()
                })
            },
            editNews(news){
                this.editForm = news
                // console.log(news,this.editForm)
                this.modalDisplayUpdate = true
            },
            updateForm(){
                this.$refs['editForm'].validate(valid => {
                    if (valid) {
                        //validate success,then request data
                        // this.$message.success('ok')
                        updateNews(this.editForm).then(res=>{
                            if(res.success){
                                this.$message.success(res.message)
                                this.cancelForm()
                                this.loadInfo()
                                this.modalDisplayUpdate = false
                            }else{
                                this.$message.error(res.message)
                            }
                        })
                    } else {
                        this.$message.error('error!please check your form.')
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .container{
        .edit-button{
            margin-right: 20px;
        }
        h2{
            color: #0D5C8C;
            font-weight: bold;
        }
        ul{
            text-align: left;
            line-height: 40px;
            margin-left: 50px;
            li{
                span{
                    color: #0D5C8C;
                    font-weight: bold;
                    margin: 3px;
                }
            }
        }
    }

</style>
