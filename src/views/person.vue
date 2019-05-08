<template>
    <div class="path-container">
        <div class="championship-table" v-for="(a, index) in arr" :key="index">
            <ul class="list-group c1">
                <li class="list-group-item list-head"><router-link :to="'/championship/' + a.champ_id">Название чемпионата</router-link></li>
                <li class="list-group-item">РОЛЬ</li>
                <li class="list-group-item">ЧТО-ТО</li>
                <li class="list-group-item">ЕЩЕ ЧТО-ТО</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'person',
        props: ['id'],
        data() {
            return {
                arr: [
                    {champ_id: 1},
                    {champ_id: 2},
                    {champ_id: 3},
                ]
            }
        }
    }
</script>