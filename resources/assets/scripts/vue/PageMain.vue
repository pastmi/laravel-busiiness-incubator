<template>
    <div id="page-main">
        <img class="map" src="/img/map.jpg"/>
        <Header/>
        <Menu/>
        <img class="test" v-if="getMenu === 0" src="/img/pin_grey_screen.png"/>
        <img class="test" @click="openMyProject" v-if="getMenu === 1" src="/img/projects_g_screen.png"/>
        <img class="test" @click="openNews" v-if="getMenu === 2" src="/img/projects_r_screen.png"/>
        <modal-my-projects v-on:openNewProject="openNewProject" ref="modal-my-projects"/>
        <modal-new-projects v-on:openNewProjectSecond="openNewProjectSecond"  ref="modal-new-projects"/>
        <modal-new-projects-second ref="modal-new-projects-second"/>
        <modal-news ref="modal-news"/>
    </div>
</template>
<script>

    import { actions } from '../store';

    export default {
        name:'page-main',
        computed:{
            getMenu(){
                return this.$store.getters.getMenu;
            }
        },
        methods: {
            openNews() {
                this.$refs['modal-news'].open();
            },
            openMyProject() {
                this.$refs['modal-my-projects'].open();
            },
            openNewProject() {
                this.$refs['modal-new-projects'].open();
            },
            openNewProjectSecond() {
                this.$refs['modal-new-projects-second'].open();
            }
        }
    }
</script>

<style lang="scss" scoped>
    #page-main {
        width: 760px!important;
        height: 637px!important;
        background: black;
        position: relative;
        overflow: hidden;
    }
    .map {
        height: 100%;
    }
    .test {
        cursor: pointer;
        position: absolute;
        top:200px;
        left: 300px;
    }
    
</style>
