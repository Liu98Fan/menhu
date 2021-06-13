<template>
    <div>
        <a-card title="Member Login" style="width: 50%;margin-left: 25%" hoverable>
            <div style="text-align: center">
                <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
                    <a-form-model-item has-feedback label="User name" prop="username">
                        <a-input v-model="ruleForm.username"  />
                    </a-form-model-item>
                    <a-form-model-item has-feedback label="Password" prop="password">
                        <a-input v-model="ruleForm.password" type="password"  />
                    </a-form-model-item>
                    <a-form-model-item :wrapper-col="{ span: 15, offset: 4 }">
                        <a-button type="primary" @click="submitForm('ruleForm')">
                            Login
                        </a-button>
                    </a-form-model-item>
                </a-form-model>
            </div>
        </a-card>
    </div>
</template>

<script>/**
 @Date: 2021-05-22
 @Author: Mr Liu
 @Project: menhu
 **/

import {requestLogin} from "../axios/api/login";
import {mapActions} from 'vuex'
    export default {
        name: "Login",
        data() {
            return {
                layout: {
                    labelCol: { span: 8 },
                    wrapperCol: { span: 8 },
                },
                ruleForm:{
                    username:'',
                    password:'',
                },
                rules: {
                    username: [{ required:true, trigger: 'blur' }],
                    password: [{ required:true, trigger: 'blur' }],
                },
            }
        },
        methods: {
            ...mapActions(['login']),
            submitForm(form){
                this.$refs[form].validate(valid => {
                    if (valid) {
                        //validate success,then request data
                        requestLogin(this.ruleForm).then(res=>{
                            console.log(res)
                            if(res.success){
                                this.$message.success(res.message)
                                //TODO: save userInfo into vuex
                                this.login(this.ruleForm.username)
                                this.$router.push('/')
                            }else{
                                this.$message.error(res.message)
                                this.ruleForm = {
                                    username:'',
                                    password:'',
                                }
                            }
                        })
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
