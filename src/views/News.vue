<template>
    <div class="container">
        <div><h2>News List</h2><a-tag color="green">{{news.length}} in total</a-tag></div>
        <ul>
            <li v-for="(item,index) in news" :key="index">
                <span>{{item.month}}</span>
                <span>{{item.year}}</span>
                <span>-</span>
                <span>{{item.text}}</span>
            </li>
        </ul>
    </div>
</template>

<script>/**
 @Date: 2021-05-22
 @Author: Mr Liu
 @Project: menhu
 **/

import {requestInfo} from "../axios/api/news";

    export default {
        name: "News",
        data() {
            return {
                news:[],
            }
        },
        mounted() {
            this.loadInfo()
        },
        methods: {
            loadInfo(){
                requestInfo().then(res=>{
                    this.news = res
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .container{
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
