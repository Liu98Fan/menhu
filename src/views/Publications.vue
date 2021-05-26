<template>
    <div>
        <a-tag color="pink" >{{publications.length}} in total</a-tag>
        <div class="list">
            <div v-for="(item,index) in publications" :key="index" class="publication-item">
                <a-tag :color="selectColor(index)" class="tag">{{index+1}}</a-tag>
                <div style="margin-left: 40px">
                    <div>
                        <a :href="item.link" target="_blank" class="link">{{item.title}}</a>
                        <span v-if="item.pdf" ><a :href="item.pdf" target="_blank" ><a-tag class="pdf">pdf file</a-tag></a></span>
                    </div>
                    <div class="authors">
                        {{item.authors}}
                    </div >
                    <div class="journal">{{item.journal}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>/**
 @Date: 2021-05-22
 @Author: Mr Liu
 @Project: menhu
 **/

import {requestInfo} from "../axios/api/publications";
import {selectColor} from "../util/utils";

    export default {
        name: "Publications",
        data() {
            return {
                publications:[],
            }
        },
        mounted() {
            this.loadInfo()
        },
        methods: {
            selectColor,
            loadInfo(){
                requestInfo().then(res=>{
                    this.publications = res
                })
            }
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
