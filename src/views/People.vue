<template>
    <div class="people">
        <div class="professor">
            <a-row type="flex" justify="center" v-login>
                <a-button class="edit-button" @click="insertProfessor" type="primary">Insert Member</a-button>

            </a-row>
            <a-divider>professors</a-divider>
            <a-empty v-if="people.professors.length===0" style="text-align: center"></a-empty>
            <a-card class="card" v-for="professor in people.professors" :loading="loading" :key="professor.id">
                <div slot="title"><span class="title">{{professor.name}}</span><a-tag color="pink">{{professor.identity}}</a-tag>
                    <a-button type="link" @click="editMember(professor)" v-login>Edit</a-button>
                    <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="deleteMember(professor)">
                        <template slot="title">
                            <p>Are you sure to delete this one?</p>
                        </template>
                        <a-button type="link" v-login>Delete</a-button>
                    </a-popconfirm>

                </div>
                <a-row>
                    <a-col :span="6">
                        <img :src="professor.url" align="left" hspace="15" vspace="5" >
                    </a-col>
                    <a-col :span="18">
                        <div v-if="professor.description.length>0">
                            <div v-for="(item,index) in professor.description" :key="index" style="text-align:left;line-height: 30px;">{{item}}</div>
                        </div>
                        <div v-if="professor.directions.length>0">
                            <h4>
                                Scientific directions:
                            </h4>
                            <ul v-for="(item,index) in professor.directions" :key="index" style="text-align:left"><li>{{item.title}}</li></ul>
                        </div>

                        <div v-if="professor.phone">
                            <h4>Tel:{{professor.phone}}</h4>
                        </div>
                        <div v-if="professor.fax">
                            <h4>Fax:{{professor.fax}}</h4>
                        </div>
                        <div v-if="professor.mail">
                            <h4>Email:{{professor.mail}}</h4>
                        </div>
                    </a-col>
                </a-row>
            </a-card>
        </div>
        <a-divider >Students</a-divider>
        <a-empty v-if="people.students.length===0"></a-empty>
        <a-row type="flex" justify="start" :gutter="[16,16]">
            <a-col :span="12" v-for="(student,index) in people.students" :key="`${student.name}${index}`">
                <a-card class="card" :loading="loading" >
                    <div slot="title"><span class="title">{{student.name}}</span><a-tag color="pink">{{student.identity}}</a-tag>
                        <a-button type="link" @click="editMember(student)" v-login>Edit</a-button>
                        <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="deleteMember(student)">
                            <template slot="title">
                                <p>Are you sure to delete this one?</p>
                            </template>
                            <a-button type="link" v-login >Delete</a-button>
                        </a-popconfirm></div>
                    <a-row type="flex" :gutter="[16,16]">
                        <a-col flex="200px">
                            <img :src="student.url" align="left" hspace="15" vspace="5" >
                        </a-col>
                        <a-col flex="auto">
                            <div v-if="student.description.length>0">
                                <div v-for="(item,index) in student.description" :key="index" style="text-align:left;line-height: 30px;">{{item}}</div>
                            </div>
                            <div v-if="student.directions.length>0">
                                <h4>
                                    Scientific directions:
                                </h4>
                                <ul v-for="item in student.directions" :key="item.id" style="text-align:left"><li>{{item.title}}</li></ul>
                            </div>

                            <div v-if="student.phone">
                                <h4>Tel:{{student.phone}}</h4>
                            </div>
                            <div v-if="student.fax">
                                <h4>Fax:{{student.fax}}</h4>
                            </div>
                            <div v-if="student.mail">
                                <h4>Email:{{student.mail}}</h4>
                            </div>
                        </a-col>
                    </a-row>
                </a-card>
            </a-col>
        </a-row>
        <a-modal :title="`${obj}`" :visible="professorModal" width="50%" okText="submit" okType="primary" @ok="submitForm('professorForm')" @cancel="professorModal=false">
            <a-form-model ref="professorForm" :model="professorForm" :rules="rules" v-bind="layout">
                <a-form-model-item has-feedback label="name" prop="name">
                    <a-input   v-model="professorForm.name"/>
                </a-form-model-item>
                <a-form-model-item has-feedback label="identity" prop="identity">
                   <a-input v-model="professorForm.identity"></a-input>
                    <div>
                        <div>try these……</div>
                        <a-tag @click="professorForm.identity='Group leader'">Group Leader</a-tag>
                        <a-tag @click="professorForm.identity='PhD student'">PhD student</a-tag>
                        <a-tag @click="professorForm.identity='Undergraduate student'">Undergraduate student</a-tag>



                    </div>
                </a-form-model-item>
                <a-form-model-item has-feedback label="description" prop="description">
                    <div>
                        <div v-for="item in professorForm.description" :key="item">
                            <a-tag closable @close="removeDescription(item)">{{item}}</a-tag>
                        </div>
                    </div>
                    <a-input-search v-model="descriptionText" enter-button="add" @search="addProDescription"></a-input-search>
                </a-form-model-item>
                <a-form-model-item has-feedback label="directions" prop="directions">
<!--                    <template v-for="tag in professorForm.directions">-->
<!--                        <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">-->
<!--                            <a-tag :key="tag" :closable="true" @close="() => handleClose(tag)">-->
<!--                                {{ `${tag.slice(0, 20)}...` }}-->
<!--                            </a-tag>-->
<!--                        </a-tooltip>-->
<!--                        <a-tag v-else :key="tag" :closable="true" @close="() => handleClose(tag)">-->
<!--                            {{ tag }}-->
<!--                        </a-tag>-->
<!--                    </template>-->
                    <a-select
                            v-model="professorForm.directions"
                            mode="multiple"
                            style="width: 100%"
                            placeholder="select one direction"
                            option-label-prop="label"
                    >
                        <a-select-option :value="item.id" :label="item.title" v-for="item in directionList" :key="item.id">
                            {{item.title}}
                        </a-select-option>
                    </a-select>
<!--                    <a-select  v-if="addDirectionVisible"  ref="addDirection" :style="{ width: '150px' }"-->
<!--                               :value="directionText" @blur="handleInputConfirm"-->
<!--                               @keyup.enter="handleInputConfirm"  @change="handleInputChange">-->
<!--                        <a-select-option :value="item.id" v-for="item in directionList" :key="item.id">-->
<!--                            {{item.title}}-->
<!--                        </a-select-option>-->
<!--                    </a-select>-->
<!--                    <a-input-->
<!--                            v-if="addDirectionVisible"-->
<!--                            ref="addDirection"-->
<!--                            type="text"-->
<!--                            size="small"-->
<!--                            :style="{ width: '78px' }"-->
<!--                            :value="directionText"-->
<!--                            @change="handleInputChange"-->
<!--                            @blur="handleInputConfirm"-->
<!--                            @keyup.enter="handleInputConfirm"-->
<!--                    />-->
<!--                    <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showAddDirection">-->
<!--                        <a-icon type="plus" /> Add direction-->
<!--                    </a-tag>-->
                </a-form-model-item>
                <a-form-model-item has-feedback label="phone" prop="phone">
                    <a-input v-model="professorForm.phone"></a-input>
                </a-form-model-item>
                <a-form-model-item has-feedback label="mail" prop="mail">
                    <a-input v-model="professorForm.mail"></a-input>
                </a-form-model-item>
                <a-form-model-item has-feedback label="fax" prop="fax">
                    <a-input v-model="professorForm.fax"></a-input>
                </a-form-model-item>
                <a-form-model-item has-feedback label="photo" prop="file">
                    <img v-if="obj==='Edit member'&&fileList.length===0" :src="professorForm.url" align="left" hspace="15" vspace="5" >
                    <a-upload  :file-list="fileList" :multiple="false" :remove="handleRemove" :before-upload="beforeUpload">
                        <a-button v-show="fileList.length<1"> <a-icon type="upload" /> Select File </a-button>
                    </a-upload>
                </a-form-model-item>
                <a-form-model-item has-feedback label="type" prop="isLeader">
                    <a-radio-group v-model="professorForm.isLeader" :default-vaule="false">
                        <a-radio-button :value="true">
                            Professor
                        </a-radio-button>
                        <a-radio-button :value="false">
                            Student
                        </a-radio-button>
                    </a-radio-group>
                </a-form-model-item>
            </a-form-model>
        </a-modal>
    </div>
</template>

<script>
    import {addPeople, deletePeople, editPeople, requestInfo} from "../axios/api/people";
    import {directionList} from "../axios/api/research";

    export default {
        name: "People",
        data() {
            return {
                obj:'Insert member',
                people:{
                    professors:[
                        {
                            name:'Pavlos Savvidis',
                            identity:'Group leader',
                            description:[
                                'Associate Professor',
                                'Department of Materials Science and Technology',
                                'Microelectronics Research Group, IESL-FORTH',
                                'Heraklion, Crete, Greece',
                            ],
                            img:'',
                            directions:[
                            ],
                            phone:'',
                            fax:'',
                            email:'',
                        },
                    ],
                    students:[
                        {
                            name:'Manolis Mavrotsoupakis',
                            identity:'PhD student',
                            description:['Research Assistant Westlake University'],
                            img:'',
                            directions:[
                            ],
                            phone:'+30 2810394130',
                            fax:'',
                            email:'eldridge@physics.uoc.gr',
                        },
                    ]
                },
                professorModal:false,
                layout: {
                    labelCol: { span: 6 },
                    wrapperCol: { span: 16 },
                },
                professorForm:{
                    name:'',
                    identity:'Group leader',
                    description:[],
                    img:'',
                    directions:[],
                    phone:'',
                    fax:'',
                    mail:'',
                    file:'',
                    isLeader:false,
                },
                descriptionText:'',
                addDirectionVisible:false,
                directionText:'',
                fileList:[],
                uploading:false,
                rules:{
                    name: [{ required:true, trigger: 'blur' }],
                    identity: [{ required:true, trigger: 'blur' }],
                    // file: [{ required:true, trigger: 'blur' }],
                    isLeader:[{ required:true, trigger: 'blur' }],
                },
                directionList:[],
                loading:true,
            }
        },
        mounted() {
            this.loadInfo()
        },
        methods: {
            loadInfo(){
                this.loading = true
                requestInfo().then(res=>{
                    if(res.success){
                        this.loading = false
                        this.people = this.sortData(res.data)
                    }else{
                        this.$message.error(res.message)
                    }
                })
                directionList().then(res=>{
                    this.directionList = res.data
                })
            },
            sortData(data){
                let professors = []
                let students = []
                data.forEach(item=>{
                    item.description = item.description.length>0?item.description.split(","):[]
                    if(item.isLeader){
                        professors.push(item)
                    }else{
                        students.push(item)
                    }
                })
                return {professors,students}
            },
            insertProfessor(){
                this.initModal()
                this.professorModal = true
                this.obj = "Insert member"
            },
            initModal(){
                this.professorModal = false
                this.professorForm = {
                    name:'',
                    identity:'',
                    description:[],
                    img:'',
                    directions:[],
                    phone:'',
                    fax:'',
                    mail:'',
                    file:'',
                }
                this.fileList = []
            },
            addProDescription(){
                if(this.descriptionText){
                    this.professorForm.description.push(this.descriptionText)
                    this.descriptionText = ''
                    this.$message.success("add one description!")
                }
            },
            //remove a direction
            handleClose(removedTag){
                let newTags = this.professorForm.directions.filter(tag => tag !== removedTag);
                this.professorForm.directions = newTags;
            },
            removeDescription(removedTag){
                let newTags = this.professorForm.description.filter(tag => tag !== removedTag);
                this.professorForm.description = newTags;
            },
            //show input after click add direction
            showAddDirection(){
                this.addDirectionVisible = true;
                this.$nextTick(function() {
                    this.$refs.addDirection.focus();
                });
            },
            //bind data to directionText
            handleInputChange(e) {
                this.directionText = e
                let inputValue = e;
                let tags = this.professorForm.directions;
                if (inputValue && tags.indexOf(inputValue) === -1) {
                    tags = [...tags, inputValue];
                    this.$set(this.professorForm,'directions',tags)
                    this.directionText = ''
                    this.addDirectionVisible = false
                }
            },
            //handle add
            handleInputConfirm(){
                let inputValue = this.directionText;
                let tags = this.professorForm.directions;
                if (inputValue && tags.indexOf(inputValue) === -1) {
                    tags = [...tags, inputValue];
                    this.$set(this.professorForm,'directions',tags)
                    this.directionText = ''
                    this.addDirectionVisible = false
                }else{
                    this.directionText = ''
                    this.addDirectionVisible = false
                }
            },
            //return false,manual upload
            beforeUpload(file){
                this.fileList = [file]
                this.professorForm.file = file
                return false
            },
            //remove img
            handleRemove(file){
                this.fileList = [];
            },

            submitForm(formName){
                this.$refs[formName].validate(valid=>{
                    if(valid){
                        let formData = new FormData()
                        Object.keys(this.professorForm).forEach(key=>{
                            formData.append(key,this.professorForm[key])
                        })
                        if("Edit member" === this.obj){

                            editPeople(formData,this.professorForm.id).then(res=>{
                                if(res.success){
                                    this.$message.success(res.message)
                                    this.initModal()
                                    this.loadInfo()
                                }else{
                                    this.$message.error(res.message)
                                }
                            })
                        }else{
                            addPeople(formData).then(res=>{
                                if(res.success){
                                    this.$message.success(res.message)
                                    this.initModal()
                                    this.loadInfo()
                                }else{
                                    this.$message.error(res.message)
                                }
                            })
                        }
                    }else{
                        this.$message.error("please check your form !")
                    }
                })
            },
            editMember(member){
                this.professorModal = true
                this.professorForm = member
                let d = []
                this.professorForm.directions.forEach(item=>{
                    d.push(item.id)
                })
                this.professorForm.directions = d
                this.obj = "Edit member"
                this.fileList=[]

            },
            deleteMember(member){
                deletePeople(member.id).then(res=>{
                    this.$message.success("delete success")
                    this.loadInfo()
                })
            }


        }
    }
</script>

<style scoped lang="scss">
    .people{
        .title{
            margin-right: 10px;
            font-weight: bold;
            color:#0D5C8C;
        }
        .card{
            background-color: #E1E1E1;
            margin: 10px;
        }
        h3{
            font-weight: bold;
            color: #0D5C8C;
        }
        h4{
            color: #0D5C8C;
            text-align: left;
            font-weight: bold;

        }
        font-size: small;
        color: #0D5C8C !important;
        padding: 50px;
        img{
            width: 200px;
            aspect-ratio: auto 160 / 160;
            height: 200px;
            border-top-width: 1px;
            border-right-width: 1px;
            border-bottom-width: 1px;
            border-left-width: 1px;
            border-top-style: solid;
            border-right-style: solid;
            border-bottom-style: solid;
            border-left-style: solid;
            margin-right: 40px
        }
    }

</style>
