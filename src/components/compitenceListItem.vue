<template>
    <li class="list-group-item">
        <router-link :to="'competence/' + id">{{name}}</router-link>
    </li>
</template>
<script>
    export default {
        name: 'competences_list_item',
        props: ['id', 'name'],

    }
</script>