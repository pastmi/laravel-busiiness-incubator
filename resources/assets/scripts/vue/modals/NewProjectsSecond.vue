<template>
    <ui-modal id="modals-new-project-second" ref="modal" dismissOn="esc close-button">
        <template slot="header">
            New projects
        </template>
        <div class="body">
            <img src="/img/investment.png"/>
            <div class="information-block">
                <div class="check-block">
                    <img src="/img/bank.png"/>
                    <p>Bank</p>
                    <input type="checkbox" id="c3" name="cc" />
                    <label for="c3"><span></span></label>
                </div>
                 <div class="check-block">
                    <img src="/img/Fond.png"/>
                    <p>Fond</p>
                    <input type="checkbox" id="c4" name="cc" />
                    <label for="c4"><span></span></label>
                </div>
                <div class="check-block">
                    <img src="/img/people.png"/>
                    <p>Private investor</p>
                    <input type="checkbox" id="c5" name="cc" />
                    <label for="c5"><span></span></label>
                </div>
                <button @click="cancel">Accept</button>
            </div>
            
        </div>
    </ui-modal>
</template>

<script>
    export default {
        name: 'modals-new-project-second',

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
        margin-left: auto;
        margin-right: 20px;
    }

    input[type="checkbox"] + label span {
        display:inline-block;
        width:26px;
        height:26px;
        border-radius: 4px;
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
        font-size: 20px;
        color: #f2f2f2;
        align-items: center;
        .check-block {
            display: flex;
            width: 100%;
            align-items: center;
            margin: 10px 0;
            margin-left: 20px;
            img {
                width: 39px;
                margin-right: 20px;
            }
        }
        .information-block {
            width: 100%;
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
        margin-top: 27px;
        &:hover {
            background-color: rgb(255, 61, 0);
        }
    }
    

</style>
