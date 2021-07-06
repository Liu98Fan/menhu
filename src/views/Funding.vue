<template>
    <div class="container">
        <a-row type="flex" justify="center" v-login>
            <a-button class="edit-button" @click="insertFunding" type="primary" style="margin:10px">Insert funding</a-button>
        </a-row>
        <div>
            <a-divider><h2>funding List</h2></a-divider><a-tag color="green">{{fundings.length}} in total</a-tag></div>
        <div class="fundings">
            <a-empty v-if="fundings.length===0"/>
            <a-collapse v-model="activeKey" class="list" v-else>
                <template v-for="(item,index) in fundings" >
                    <a-collapse-panel    class="funding-item" :key="toStr(index)">
                        <div slot="header" class="header">
                            <span>{{item.text}} ( {{item.start}} - {{item.end}} ) </span>
                            <a-tag color="cyan">
                                {{item.amount}} k €
                            </a-tag>
                            <a-button type="link" @click="editFunding(item)" v-login>Edit</a-button>

                            <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="deleteFunding(item)">
                                <template slot="title">
                                    <p>Are you sure to delete this one?</p>
                                </template>
                                <a-button type="link"  v-login>Delete</a-button>
                            </a-popconfirm>
                        </div>
                        <div class="body" >
                            <a-empty v-if="item.publications.length===0"></a-empty>
                            <ul>
                                <li v-for="(data,index) in item.publications" :key="data.title+index">
                                    <p>{{data.title}}</p>
                                    <p>{{data.authors}}</p>
                                    <p>{{data.journal}}</p>
                                </li>
                            </ul>
                        </div>
                    </a-collapse-panel>
                </template>

            </a-collapse>
        </div>
        <a-modal v-model="editModal" :title="`${obj}`"  width="50%" okText="submit" okType="primary" @ok="submitForm('fundingForm')" @cancel="editModal=false">
            <a-form-model ref="fundingForm" :model="fundingForm" :rules="rules" v-bind="layout">
                <a-form-model-item has-feedback label="text" prop="text">
                    <a-textarea :row="3"   v-model="fundingForm.text"/>
                </a-form-model-item>
                <a-form-model-item has-feedback label="start" prop="start">
                    <a-select style="width: 120px"  v-model="fundingForm.start">
                        <a-select-option :value="item" v-for="item in range(2000,2100)" :key="`start${item}`">
                            {{item}}
                        </a-select-option>
                    </a-select>
                </a-form-model-item>
                <a-form-model-item has-feedback label="end" prop="end">
                    <a-select style="width: 120px"  v-model="fundingForm.end" >
                        <a-select-option :value="item" v-for="item in range(2000,2100)" :key="`end${item}`">
                            {{item}}
                        </a-select-option>
                    </a-select>
                </a-form-model-item>
                <a-form-model-item has-feedback label="amount" prop="amount">
                    <a-input  style="width: 120px" v-model="fundingForm.amount" suffix="RMB"/>
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

import {addFunding, deleteFunding, editFunding, requestInfo} from "../axios/api/funding";

    export default {
        name: "Funding",
        data() {
            return {
                fundings:[],
                activeKey: '0',
                editModal:false,
                rules:{
                    text: [{ required:true, trigger: 'blur' }],
                    start: [{ required:true, trigger: 'blur' }],
                    end:[{ required:true, trigger: 'blur' }],
                    amount:[{ required:true, trigger: 'blur' }],
                },
                layout: {
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                },
                fundingForm:{
                    text:'',
                    start:'',
                    end:'',
                    amount:'',
                },
                obj:"Insert funding",
            }
        },
        mounted() {
            this.loadInfo()
        },
        watch: {
            activeKey(key) {
                console.log(key);
            },
        },
        methods: {
            loadInfo(){
                requestInfo().then(res=>{
                    if(res.success){
                        this.fundings = res.data
                    }else{
                        this.$message.error(res.message)
                    }
                })
            },
            toStr(key){
                return key.toString()
            },
            insertFunding(){
                this.cleanForm()
                this.editModal = true

            },
            range(start, stop, step = 1){
                return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)

            },
            cleanForm(){
              this.editModal = false
              this.fundingForm = {
                        text:'',
                        start:'',
                        end:'',
                        amount:'',
                }
                this.obj = "Insert funding"
            },
            submitForm(formName){
                this.$refs[formName].validate(valid=>{
                    if(valid){
                        if(this.fundingForm.start>this.fundingForm.end){
                            this.$message.error("start must be smaller than end")
                            return false
                        }
                        let formData = new FormData()
                        Object.keys(this.fundingForm).forEach(key=>{
                            if(key!=='publications'){
                                formData.append(key,this.fundingForm[key])
                            }

                        })
                        if(this.obj === "Edit funding"){
                            editFunding(formData,this.fundingForm.id).then(res=>{
                                if(res.success){
                                    this.$message.success(res.message)
                                    this.cleanForm()
                                    this.loadInfo()
                                }else{
                                    this.$message.error(res.message)
                                }
                            })
                        }else{
                            addFunding(formData).then(res=>{
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
            deleteFunding(funding){
                deleteFunding(funding.id).then(res=>{
                    this.$message.success("success")
                    this.loadInfo()
                })
            },
            editFunding(data){
                this.editModal = true
                this.fundingForm = data
                this.obj = "Edit funding"
            }
        }
    }
</script>

<style scoped lang="scss">
    .fundings{
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
        .list{
            margin-top: 20px;
            width: 80%;
            .funding-item{

                .header{
                    text-align: left;
                    font-weight: bold;
                    color: #0D5C8C;
                }
                .body{
                    ul{
                        text-align: left;
                        li{
                            p{
                                color: #0D5C8C;

                            }
                        }
                    }
                }
            }
        }
    }

</style>
