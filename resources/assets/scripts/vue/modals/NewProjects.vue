<template>
    <ui-modal id="modals-new-project" ref="modal" dismissOn="esc close-button">
        <template slot="header">
            New projects
        </template>
        <div class="body">
            <div class="information">
                <img src="/img/bank.png"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="input-block">
                <input type="checkbox" id="c1" name="cc" />
                <label for="c1"><span></span>Cum:</label>
                <input type="text"/>
            </div>
            <div class="information">
                <img src="/img/people.png"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="input-block">
                <input type="checkbox" id="c2" name="cc" />
                <label for="c2"><span></span>Cum:</label>
                <input type="text"/>
            </div>
            <button @click="openModal">Accept</button>
        </div>
        
    </ui-modal>
</template>

<script>
    export default {
        name: 'modals-new-project',
        props:['openNewProjectSecond'],
        data() {
            return {

            };
        },

        methods: {
            open() {
                this.$refs['modal'].open();
            },

            cancel() {
                this.$refs['modal'].close();
            },
            openModal(){
                this.$emit('openNewProjectSecond');
                this.cancel();
            }
        }
    };
</script>
<style lang="scss" scoped>
    input[type="checkbox"] {
        display:none;
    }

    input[type="checkbox"] + label {
        color:#f2f2f2;
        font-size: 18px;
    }

    input[type="checkbox"] + label span {
        display:inline-block;
        width:26px;
        height:26px;
        border-radius: 4px;
        margin:-2px 10px 0 0;
        vertical-align:middle;
        background:#f2f2f2;
        cursor:pointer;
    }

    input[type="checkbox"]:checked + label span {
        background:url('/img/checked.png')center no-repeat;
    }
    .body {
        display: flex;
        height: 100%;
        
        justify-content: center;
        flex-direction: column;
    }
    .input-block {
        margin-left: 30px;
        margin-bottom: 20px;
        input[type="text"] {
            height:26px;
            width: 200px;
            font-size: 18px;
            margin-left: 20px;
            border-radius: 6px;
            padding: 0px 10px;
        }
        
    }
    
    .information {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #f2f2f2;
        margin-bottom: 20px;
        img {
            margin-right: 20px;
            width: 39px;
        }
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 165px;
        font-size: 20px;
        color: white;
        border: none;
        cursor: pointer;
        box-shadow:  3px 3px 10px #00000060;
        background-color: rgb(0, 179, 88);
        margin-left: auto;

        &:hover {
            background-color: rgb(255, 61, 0);
        }
    }

</style>
