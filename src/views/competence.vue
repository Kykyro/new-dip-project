<template>
    <div class="competence-path">
        <div  v-for="(championship, index) in championships" :key="index">
            <pathItem :name="championship.name" :id="championship.id"></pathItem>
        </div>
    </div>

</template>
<script>
    import pathItem from '../components/competencePathItem.vue'
    export default {
        name: 'competencePath',
        props: ['id'],
        components: {pathItem},
        data() {
            return {
                championships: [
                    {name: 'aaa', id: 1},
                    {name: 'bbb', id: 2},
                    {name: 'ccc', id: 3},
                ]
            }
        }
    }
</script>
<style>
    .competence-path{
        display: flex;
        flex-wrap: wrap;
    }
</style>