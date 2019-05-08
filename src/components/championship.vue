<template>
    <div class="championship-table">
        <div>
            <comand v-for="comand in comands"></comand>
        </div>

        <div>
            <experts  v-for="expert in experts"></experts>
        </div>
    </div>
</template>
<script>
    import comand from './comand.vue'
    import experts from './experts.vue'

    export default {
        name: 'championship',
        components: {comand, experts},
        props: ['id'],
        data() {
            return {
                experts: [
                    {name: 'aaa', id: 1},
                    {name: 'bbb', id: 2},
                    {name: 'ccc', id: 3},
                ],
                comands:[
                    {},
                    {},
                    {},

                ]
            }
        },
        methods: {
            toPerson: function (id) {
                window.location.href = window.location.href + `&person_id=${id}`
            }
        }
    }
</script>
<style>
    .championship-table{
        display: flex;
        flex-wrap: wrap;
        align-items: center;

    }
</style>