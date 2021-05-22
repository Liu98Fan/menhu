<template>
    <div>
        <a-menu v-model="menuSelect" mode="horizontal" theme="dark" @select="handleMenuClick">
            <a-menu-item key="overview"> Overview </a-menu-item>
            <a-menu-item key="research"> Research </a-menu-item>
            <a-menu-item key="people"> People </a-menu-item>
            <a-menu-item key="media"> Media </a-menu-item>
            <a-menu-item key="publications"> Publications </a-menu-item>
            <a-menu-item key="photoGallery"> Photo gallery </a-menu-item>
            <a-menu-item key="location"> Location </a-menu-item>
            <a-menu-item key="funding"> Funding </a-menu-item>
            <a-menu-item key="news"> News </a-menu-item>
            <a-menu-item key="calendar"> Calendar </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "Menu",
        data(){
            return {
                //["overview","research","people","media","publications","photoGallery","location","funding","news","calendar"]
                menuList:["overview"],
            }
        },
        computed:{
          ...mapGetters(['menuSelect'])
        },
        methods:{
            ...mapActions(['selectMenu']),
            handleMenuClick({item,key,keyPath}){
                this.menuList = [key]
                this.selectMenu([key])
                this.$router.push(`/${key}`)
            }
        }
    }
</script>

<style scoped>

</style>
