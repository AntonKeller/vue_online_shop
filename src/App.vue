<template>
    <div class="app">
        <h1>Hello Vue</h1>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quibusdam.</p>
        <v-main-wrapper/>
    </div>
</template>

<script>
    import vMainWrapper from './components/v-main-wrapper'

    export default {
        name: 'App',
        components: {
            vMainWrapper
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
