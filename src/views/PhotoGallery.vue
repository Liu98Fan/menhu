<template>
    <div>
        <a-tabs :default-active-key="activeKey" size="large" @change="handleTab">
            <a-tab-pane key="lab" tab="Lab photos">
                <a-tag color="cyan">{{photos.length}} in total</a-tag>
                <a-row type="flex" justify="center" :gutter="[20,20]" class="photo">
                    <a-col :span="12" v-for="(item,index) in photos" :key="item.title+index">
                        <img :alt="item.title" :src="item.img"/>
                        <h3>{{item.title}}</h3>
                    </a-col>
                </a-row>
            </a-tab-pane>
            <a-tab-pane key="group" tab="Group photos">
                <a-tag color="cyan">{{photos.length}} in total</a-tag>
                <a-row type="flex" justify="center" :gutter="[20,20]" class="photo">
                    <a-col :span="12" v-for="(item,index) in photos" :key="item.title+index">
                        <img :alt="item.title" :src="item.img"/>
                        <h3>{{item.title}}</h3>
                    </a-col>
                </a-row>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>/**
 @Date: 2021-05-22
 @Author: Mr Liu
 @Project: menhu
 **/

import {requestGroupPhoto, requestLabPhoto} from "../axios/api/photoGallery";

    export default {
        name: "PhotoGallery",
        data() {
            return {
                photos:[],
                activeKey:'lab'
            }
        },
        mounted() {
            this.loadPhoto()
        },
        methods: {
            loadPhoto(){
                if(this.activeKey==='lab'){
                    requestLabPhoto().then(res=>{
                        this.photos = res
                    })
                }else if (this.activeKey==='group'){
                    requestGroupPhoto().then(res=>{
                        this.photos = res
                    })
                }
            },
            handleTab(key){
                this.activeKey = key
                this.loadPhoto()
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

        }
        h3{
            font-weight: bold;
            color: #0D5C8C;
        }
    }

</style>
