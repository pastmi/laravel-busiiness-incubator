<template>
    <ui-modal id="modals-news" ref="modal" dismissOn="esc close-button">
        <template slot="header">
            News
        </template>
        <div class="body">
            <img src="/img/tornadohdpi.png"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime blanditiis dolore.</p>
        </div>
    </ui-modal>
</template>

<script>
    export default {
        name: 'modals-news',

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
    .body {
        display: flex;
        align-items: center;
        font-size: 20px;
        height: 100%;
        img {
            margin-right: 25px;
        }
    }
</style>
