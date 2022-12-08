<template>
    <div class="v-main-wrapper">
        <h4>{{title}}</h4>
        <p>Lorem ipsum dolor sit amet:</p>
        <v-catalog/>
        <v-cart/>
    </div>
</template>

<script>
    import vCatalog from './v-catalog.vue'
    import vCart from './v-cart.vue'
    export default {
        name: "v-main-wrapper",
        components: {
            vCatalog,
            vCart
        },
        // props: {},
        data() {
            return {
                title: 'main-wrapper'
            }
        },
        // computed: {},
        // methods: {},
        // watch: {},
        mounted(){
            console.log('Component is mounted!')
        },
    }
</script>

<style scoped>
    .v-main-wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>