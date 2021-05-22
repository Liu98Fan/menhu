<template>
  <div class="home">
<!--   The header layout   -->
        <Header></Header>
<!--   The menu layout   -->
        <Menu/>
<!--   The Login Button   -->
        <div id="login-button">
            <a-button type="link" @click="toLogin">
                <a-icon type="login" />
                Member Login
            </a-button>
        </div>
<!--    Different pages    -->
        <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/layout/Menu";
import Header from '@/components/layout/Header'
export default {
    name: 'Home',
    components: {
    Menu,
    Header,
    },
    methods:{
        toLogin(){
            this.$message.error("undefined click event")
        }
    }
}
</script>

<style lang="scss" scoped>
  .home{
    position: relative;
    margin-left: 10%;
    margin-right: 10%;
    top: 10px;
    bottom: 10px;
    width: 80%;
    min-height: 80%;
    box-shadow: 5px 5px 5px #373737;
    background-color: white;
      #login-button{
          display: flex;
          justify-content: flex-end;
      }
  }
</style>
