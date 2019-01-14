<template>
    <div id="header">
        <img src="/img/money.png"/>
        <p>100</p>
        <img src="/img/progress.png"/>
        <p>100</p>
        <img src="/img/projects.png"/>
        <p>100</p>
        <img src="/img/days.png"/>
        <p>100</p>
    </div>
</template>
<script>
    export default {
        name: 'header',
    }
</script>


<style lang="scss" scoped>
    #header {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0;
        top:0;
        right: 0;
        z-index: 2;
        height: 29px;
        background: url('/img/topbar_ramp.png')center no-repeat;
        
        p{
            color: white;
            font-size: 18px;
            margin: 0px 10px;
            margin-right: 30px;
        }
    }
</style>

