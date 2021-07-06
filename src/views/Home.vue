<template>
  <div class="home">
      <!--   The header layout   -->
      <Header></Header>
      <!--   The menu layout   -->
      <Menu/>
    <div class="inner">

        <!--   The Login Button   -->
        <div id="login-button">
            <a-button type="link"  v-if="login">
                <a-icon type="user" />
                {{this.user.username}}
            </a-button>
            <a-button type="link" @click="toLogin" v-if="!login">
                <a-icon type="login" />
                Member Login
            </a-button>
            <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="logout">
                <template slot="title">
                    <p>Are you sure to logout?</p>
                </template>
                <a-button type="link"  v-if="login">
                    <a-icon type="login" />
                    Logout
                </a-button>
            </a-popconfirm>

        </div>
        <!--    Different pages    -->
        <a-spin :spinning="loading" tip="loading...">
            <router-view  class="animate__animated animate__bounce"/>
        </a-spin>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/layout/Menu";
import Header from '@/components/layout/Header'
import { mapGetters, mapActions} from 'vuex'
export default {
    name: 'Home',
    components: {
        Menu,
        Header,
    },
    computed:{
        ...mapGetters(['login','user','loading'])
    },
    methods:{
        ...mapActions(['logOut']),
        toLogin(){
            this.$router.push("/login")
        },
        logout(){
            this.logOut()
            this.$message.success('logout success!')
        }
    }
}
</script>

<style lang="scss" scoped>
  .home{
    position: relative;
    top: 10px;
    bottom: 10px;
    width: 100%;
    min-height:  calc(93vh);
    box-shadow: 5px 5px 5px #373737;
    background-color: white;
      .inner{
          margin-left: 10%;
          margin-right: 10%;
          #login-button{
              display: flex;
              justify-content: flex-end;
          }
      }

  }
</style>
