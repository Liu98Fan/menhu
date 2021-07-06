<template>
    <div id="research">
        <a-row type="flex" justify="center" v-login>
            <a-button class="edit-button" @click="insertResearch" type="primary">Insert research</a-button>
        </a-row>
        <a-divider><h1>Scientific directions</h1></a-divider>

        <div class="research-box" >
            <a-card  v-for="(item,index) in researchList" :key="index" :loading="loading" hoverable class="research-card">
                <div slot="title" class="title">
                    <span>{{item.title}}</span>
                    <a-button type="link" v-login class="card-button" @click="editResearch(item)">Edit</a-button>
                    <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="deleteResearch(item)">
                        <template slot="title">
                            <p>Are you sure to delete this one?</p>
                        </template>
                        <a-button type="link" v-login class="card-button">Delete</a-button>
                    </a-popconfirm>
                </div>
                <img :src="item.url" align="left" hspace="15" vspace="5" :alt="item.title">
                <p>{{item.shortDescription}}<a-button type="link" @click="showLong(index)">{{!showMore[index]?'show more':'show less'}}</a-button></p>
                <p v-show="showMore[index]">{{item.longDescription}}</p>
                <div class="member">
                    <span >Participating members:</span>  <a-tag class="tag" @click="handleTagClick(member)" v-for="(member,index) in item.member" :key="index">{{member.name}}</a-tag>
                </div>
            </a-card>
        </div>
<!--        the member modal-->
        <a-modal v-model="visible" width="50%" :footer="null">
            <div slot="title" style="text-align: center">
                {{modal.title}}
                <a-tag color="pink">{{modal.identity}}</a-tag>
            </div>
            <a-row class="member">
                <a-col :span="8">
                    <img :src="modal.url" style="
                display:flex;
                justify-content: left;
                width: 240px;
                aspect-ratio: auto 160 / 160;
                height: 240px;
                border-top-width: 1px;
                border-right-width: 1px;
                border-bottom-width: 1px;
                border-left-width: 1px;
                border-top-style: solid;
                border-right-style: solid;
                border-bottom-style: solid;
                border-left-style: solid;
                margin-right: 40px"
                         align="left" hspace="15" vspace="5" :alt="modal.title" class="img">
                </a-col>
                <a-col :span="16">
                    <h3>
                        Scientific directions:
                    </h3>
                    <ul v-for="item in modal.content.directions" :key="item"><li>{{item}}</li></ul>
                    <div>
                        <h3>Tel:{{modal.content.tel}}</h3>
                    </div>
                    <div>
                        <h3>Fax:{{modal.content.fax}}</h3>
                    </div>
                    <div>
                        <h3>email:{{modal.content.email}}</h3>
                    </div>
                </a-col>
            </a-row>
        </a-modal>
<!--        insert research-->
        <a-modal v-model="editModal" :title="`${obj}`"  width="50%" okText="submit" okType="primary" @ok="submitForm('researchForm')" @cancel="editModal=false">
            <a-form-model ref="researchForm" :model="researchForm" :rules="rules" v-bind="layout">
            <a-form-model-item has-feedback label="title" prop="title">
                <a-input   v-model="researchForm.title"/>
            </a-form-model-item>
            <a-form-model-item has-feedback label="shortDescription" prop="shortDescription">
                <a-textarea  :row="4" v-model="researchForm.shortDescription"/>
            </a-form-model-item>
            <a-form-model-item has-feedback label="longDescription" prop="longDescription">
                <a-textarea  :row="6" v-model="researchForm.longDescription"/>
            </a-form-model-item>
            <a-form-model-item has-feedback label="member" prop="member">
                <div>
                    <a-transfer
                            :data-source="memberList"
                            :rowKey="record=>record.id"
                            :titles="['member', 'selected']"
                            :target-keys="targetKeys"
                            :selected-keys="selectedKeys"
                            :render="item => item.name"
                            @change="handleMemberChange"
                            @selectChange="handleMemberSelectChange"
                            @scroll="handleScroll"
                    />
                </div>
<!--                <template v-for="tag in researchForm.members">-->
<!--                    -->
<!--                </template>-->
<!--                <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showAddDirection">-->
<!--                    <a-icon type="plus" /> Add direction-->
<!--                </a-tag>-->
            </a-form-model-item>
            <a-form-model-item has-feedback label="photo" prop="file">
                <img style="width: 100%" v-if="obj==='Edit research'&&fileList.length===0" :src="researchForm.url" align="left" hspace="15" vspace="5" >
                <a-upload  :file-list="fileList" :multiple="false" :remove="handleRemove" :before-upload="beforeUpload">
                    <a-button v-show="fileList.length<1"> <a-icon type="upload" /> Select File </a-button>
                </a-upload>
            </a-form-model-item>
            </a-form-model>
        </a-modal>
    </div>
</template>

<script>
    //TODO: showMore和showLess应当做动画，比如：淡入淡出。 可以和页面切换时候动画留到最后一起做。
    import {addResearch, deleteResearch, editResearch, requestInfo} from "../axios/api/research";
    import {listMember} from "../axios/api/people";
    export default {
        name: "Research",
        data(){
            return {
                obj:"Insert research",
                researchList:[],
                showMore:[false],
                loading:true,
                visible:false,
                memberList:[],
                modal:{
                    title:'',
                    identity:'',
                    content:{
                        img:'',
                        directions:'',
                        tel:'',
                        email:'',
                        fax:'',
                    }
                },
                editModal:false,
                researchForm:{
                    title:'',
                    img:'',
                    shortDescription:'',
                    longDescription:'',
                    member:[]
                },
                rules:{
                    name: [{ required:true, trigger: 'blur' }],
                    identity: [{ required:true, trigger: 'blur' }],
                    // file: [{ required:true, trigger: 'blur' }],
                    isLeader:[{ required:true, trigger: 'blur' }],
                },
                layout: {
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                },
                fileList:[],
                selectedKeys:[],
                targetKeys:[],

            }
        },
        mounted() {
            this.loadInfo()
        },
        methods:{
            loadInfo(){
                this.loading = true
              requestInfo().then(res=>{
                  if(res.success){
                      this.researchList = res.data
                      this.loading = false
                  }else{
                      this.$message.error(res.message)
                  }
              })
                listMember().then(res=>{
                    if(res.success){
                        this.memberList = res.data
                    }else{
                        this.$message.error(res.message)
                    }
                })},
            showLong(index){
                this.$set(this.showMore,index,!this.showMore[index])
            },
            handleTagClick(member){
                this.modal.title = member.name
                this.modal.identity = member.identity
                this.modal.content.directions = member.directions
                this.modal.content.tel = member.tel
                this.modal.content.email = member.email
                this.modal.content.fax = member.fax
                this.modal.url = member.file
                this.visible = true
            },
            insertResearch(){
                this.editModal = true
                this.obj = "Insert research"
                this.researchForm = {
                    title:'',
                    img:'',
                    shortDescription:'',
                    longDescription:'',
                    member:[]
                }
            },
            submitForm(formName){
                this.$refs[formName].validate(valid=>{
                    if(valid){
                        let formData = new FormData()
                        Object.keys(this.researchForm).forEach(key=>{
                            formData.append(key,this.researchForm[key])
                        })
                        console.log(formData)
                       if(this.obj === "Edit research"){
                          editResearch(formData,this.researchForm.id).then(res=>{
                              if(res.success){
                                  this.$message.success(res.message)
                                  this.cleanForm()
                                  this.loadInfo()
                              }else{
                                  this.$message.error(res.message)
                              }
                          })
                       }else{
                           addResearch(formData).then(res=>{
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
            //remove img
            handleRemove(file){
                this.fileList = [];
            },
            //return false,manual upload
            beforeUpload(file){
                this.fileList = [file]
                this.researchForm.file = file
                return false
            },
            //remove a direction
            handleClose(removedTag){
                let newTags = this.researchForm.member.filter(tag => tag !== removedTag);
                this.researchForm.member = newTags;
            },
            handleMemberChange(nextTargetKeys, direction, moveKeys) {
                this.targetKeys = nextTargetKeys;
                this.researchForm.member = nextTargetKeys
            },
            handleMemberSelectChange(sourceSelectedKeys, targetSelectedKeys) {
                this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];
                // console.log('sourceSelectedKeys: ', sourceSelectedKeys);
                // console.log('targetSelectedKeys: ', targetSelectedKeys);
            },
            handleScroll(direction, e) {
                console.log('direction:', direction);
                console.log('target:', e.target);
            },
            cleanForm(){
                this.researchForm = {
                        title:'',
                        img:'',
                        shortDescription:'',
                        longDescription:'',
                        member:[]
                }
                this.selectedKeys = []
                this.targetKeys = []
                this.editModal = false
            },
            deleteResearch(research){
                deleteResearch(research.id).then(res=>{
                    this.$message.success("success!")
                    this.loadInfo()
                })
            },
            editResearch(research){
                this.editModal = true
                this.researchForm = research
                this.obj = "Edit research"
                this.fileList=[]
                this.initMemberTarget(research.member)
            },
            initMemberTarget(arr){
                let target = []
                arr.forEach(item=>{
                    target.push(item.id)
                })
                this.targetKeys = target
            },
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
                .card-button{
                    float: right;
                }
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
        .member{
            font-weight: bolder;
            .img{

            }
        }
        .modal-img{
            width: 100%;
        }
    }
</style>
