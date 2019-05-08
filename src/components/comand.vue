<template>
    <div class="comand-border">
        <section>
            <div class="comand">
                <div>
                    <div class="party" v-for="a in arr">
                        <router-link :to="'/person/' + a.id">Учасники</router-link>
                    </div>
                </div>

                <div class="expert-com">
                    <a href="#">Эксперт-ком</a>
                </div>
            </div>
        </section>
    </div>


</template>
<script>
    export default {
        name: 'comand',
        data() {
            return {
                arr: [
                    {id: 1},
                    {id: 2},
                    {id: 3},
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
    .comand{
        display: flex;
        align-items: center;
        border-bottom: black solid 3px;
        border-left: grey dashed 1px;
        margin: 0 0 0 0;
    }
    .comand-border{
        border-right: solid black 1px;
    }
    .comand section:last-child{
        border-bottom:  red solid 3px;
    }
    .expert-com{
        padding: 0 10px 0 10px;

    }
    .party{
        padding: 0 10px 0 10px;
        border-right: dashed grey 1px;
    }
</style>