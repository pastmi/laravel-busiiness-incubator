<template>
    <div id="app">
        <router-view ></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',

}
</script>
<style lang="scss" >
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    * {
        padding: 0px;
        margin: 0px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    #app {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    //modals
    .ui-modal__container {
        background: none!important;
        width: 450px !important;
    }
    .ui-modal__header {
        background: url('/img/windowHeader.png') center no-repeat!important;
        color:white!important;
        height: 25px!important;
        justify-content: center!important;
        font-size: 20px;
    }
    .ui-modal__close-button {
        position: absolute;
        right: 0;
    }
    .ui-icon svg  {
        color: white;
    }
    .ui-modal__body {
        background: url('/img/window_ramp.png') center no-repeat;
        height: 245px!important;
    }  
    .ui-close-button{
        background: none!important;
        &:hover{
            
        }
    } 
</style>

