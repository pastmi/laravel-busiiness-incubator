<template>
    <div id="menu">
        <div class="menu-buttons">
            <button :class="{'active':getMenu === 0 }"  @click="setMenu(0)">
                My projects
            </button>
            <button :class="{'active':getMenu === 1 }" @click="setMenu(1)">
                New projects
            </button>
            <button :class="{'active':getMenu === 2 }" @click="setMenu(2)">
                News
            </button>
            <button >
                Next
            </button>
        </div>
        <map-control/>
    </div>
</template>
<script>
    import {actions} from '../../store';
    export default {
        name:"menu",
        computed:{
            getMenu(){
                return this.$store.getters.getMenu;
            }
        },
        methods:{
            setMenu(type){
                this.$store.dispatch(actions.setMenu,type);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #menu {
        padding: 20px 12px;
        padding-top: 44px;
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 166px;
        top:0;
        left: 0;
        bottom: 0;
        background: url('/img/leftBar_ramp.png') bottom no-repeat;
        .menu-buttons {
            button {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 48px;
                width: 100%;
                margin-bottom: 18px;
                font-size: 20px;
                color: white;
                border: none;
                background-color: rgb(0, 179, 88);
                cursor: pointer;
                box-shadow:  3px 3px 10px #00000060;
            }
            button:last-child  {
                margin-top: 36px;
                background-color: rgb(255, 169, 64);
            }
            .active {
                background-color: rgb(255, 61, 0);
            }
        }
    }
</style>