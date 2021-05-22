<template>
    <div id="header">
        <!--    logo in left     -->
        <div id="logo-left">
            <a href="http://www.uoc.gr" target="_blank">
                <img src="../../assets/uoc.jpg" alt="University of crete" width="92" height="92" border="0">
            </a>
        </div>
        <!--    logo in right     -->
        <div id="logo-right">
            <a href="http://www.uoc.gr" target="_blank">
                <img src="../../assets/forth_logo.gif" alt="University of crete" width="92" height="92" border="0">
            </a>
        </div>
        <!--    main title     -->
        <div id="title-main">
            <h1>
                <a href="#" >Nanoscale Optoelectronics Lab</a>
            </h1>
        </div>
        <!--    other title    -->
        <div id="title-other-1">
            <h2>
                <a href="#" target="_blank">Dept. of Materials Science and Technology</a>
            </h2>
        </div>
        <div id="title-other-2">
            <h2>
                <a href="#" target="_blank">UNIVERSITY OF CRETE</a>
            </h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
#header{
    font-family: Verdana, Arial, Helvetica, sans-serif;
    a {
        color: #0D5C8C ;
    }
    h1 {
        font-weight: 900;
    }
    h2{
        font-weight: 500;

    }
    min-height: 120px;
    #logo-left{
        position: absolute;
        top: 8px;
        z-index: 20;
        left: 5px;
    }
    #logo-right{
        position: absolute;
        top: 8px;
        z-index: 20;
        right: 5px;
    }
    #title-main{
        position: absolute;
        top: 55px;
        left: 92px;
        right: 160px;
        z-index: 30;
        white-space: pre;
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: large;


    }
    #title-other-1{
        position: absolute;
        top: 30px;
        left: 110px;
        z-index: 31;
        white-space: pre;
    }
    #title-other-2{
        position: absolute;
        top: 5px;
        left: 110px;
        z-index: 2;
        white-space: pre;
    }
}
</style>
