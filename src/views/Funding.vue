<template>
    <div class="container">
        <div><h2>Funding List</h2><a-tag color="green">{{fundings.length}} in total</a-tag></div>
        <div class="fundings">
            <a-collapse v-model="activeKey" class="list">
                <template v-for="(item,index) in fundings" >
                    <a-collapse-panel    class="funding-item" :key="toStr(index)">
                        <div slot="header" class="header">
                            <span>{{item.text}} ( {{item.start}} - {{item.end}} ) </span>
                            <a-tag color="cyan">
                                {{item.amount}} k €
                            </a-tag>
                        </div>
                        <div class="body">
                            <ul>
                                <li v-for="(data,index) in item.data" :key="data.title+index">
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
    </div>
</template>

<script>/**
 @Date: 2021-05-22
 @Author: Mr Liu
 @Project: menhu
 **/

import {requestInfo} from "../axios/api/funding";

    export default {
        name: "Funding",
        data() {
            return {
                fundings:[],
                activeKey: '0'
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
                    this.fundings = res

                })
            },
            toStr(key){
                return key.toString()
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
