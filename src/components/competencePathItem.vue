<template>
    <div class="championship">
        <a class="title" v-on:click="toChampionship(id)" href="#">{{name}}</a>
        <championship></championship>
    </div>
</template>
<script>
    import championship from './championship'

    export default {
        name: 'pathItem',
        components: {championship},
        props: ['name', 'id'],
        methods: {
            toChampionship(id){
                window.location.href = window.location.href + `&championship_id=${id}`
            }
        }
    }
</script>
<style>
    .championship{
        display: flex;
        flex-direction: column;
        margin: 0 10px 0 40px;
        /*border: dashed #2a6496 1px;*/
    }
    .title{
        /*border: solid red 5px;*/
        border-bottom: solid black 2px;
    }
</style>