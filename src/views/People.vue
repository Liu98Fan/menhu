<template>
    <div class="people">
        <div class="professor">
            <a-card class="card">
                <div slot="title"><span class="title">{{people.professor.name}}</span><a-tag color="pink">{{people.professor.identity}}</a-tag></div>
                <a-row>
                    <a-col :span="6">
                        <img src="../assets/PavlosSavvidis.jpg" align="left" hspace="15" vspace="5" >
                    </a-col>
                    <a-col :span="18">
                        <div v-if="people.professor.description.length>0">
                            <div v-for="(item,index) in people.professor.description" :key="index" style="text-align:left;line-height: 30px;">{{item}}</div>
                        </div>
                        <div v-if="people.professor.directions.length>0">
                            <h4>
                                Scientific directions:
                            </h4>
                            <ul v-for="(item,index) in people.professor.directions" :key="index" style="text-align:left"><li>{{item}}</li></ul>
                        </div>

                        <div v-if="people.professor.tel">
                            <h4>Tel:{{people.professor.tel}}</h4>
                        </div>
                        <div v-if="people.professor.fax">
                            <h4>Fax:{{people.professor.fax}}</h4>
                        </div>
                        <div v-if="people.professor.email">
                            <h4>Email:{{people.professor.email}}</h4>
                        </div>
                    </a-col>
                </a-row>
            </a-card>
        </div>
        <a-divider >Students</a-divider>
        <a-row type="flex" justify="start" :gutter="[16,16]">
            <a-col :span="12" v-for="(student,index) in people.students" :key="student.name+index">
                <a-card class="card" >
                    <div slot="title"><span class="title">{{student.name}}</span><a-tag color="pink">{{student.identity}}</a-tag></div>
                    <a-row type="flex" :gutter="[16,16]">
                        <a-col flex="200px">
                            <img src="../assets/PavlosSavvidis.jpg" align="left" hspace="15" vspace="5" >
                        </a-col>
                        <a-col flex="auto">
                            <div v-if="student.description.length>0">
                                <div v-for="(item,index) in student.description" :key="index" style="text-align:left;line-height: 30px;">{{item}}</div>
                            </div>
                            <div v-if="student.directions.length>0">
                                <h4>
                                    Scientific directions:
                                </h4>
                                <ul v-for="item in student.directions" :key="item" style="text-align:left"><li>{{item}}</li></ul>
                            </div>

                            <div v-if="student.tel">
                                <h4>Tel:{{student.tel}}</h4>
                            </div>
                            <div v-if="student.fax">
                                <h4>Fax:{{student.fax}}</h4>
                            </div>
                            <div v-if="student.email">
                                <h4>Email:{{student.email}}</h4>
                            </div>
                        </a-col>
                    </a-row>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import {requestInfo} from "../axios/api/people";

    export default {
        name: "People",
        data() {
            return {
                people:{
                    professor:{
                        name:'Prof. Pavlos Savvidis',
                        identity:'Group leader',
                        description:[],
                        img:'',
                        directions:[],
                        tel:'',
                        fax:'',
                        email:'',
                    },
                    students:[
                        {
                            directions:[],
                            description:[]
                        }
                    ]
                }
            }
        },
        mounted() {
            this.loadInfo()
        },
        methods: {
            loadInfo(){
                requestInfo().then(res=>{
                    this.people = res
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
