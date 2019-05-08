<template>
    <div class="row">
        <div class="col-lg-4 col-lg-offset-4">
            <div class="form-group has-feedback">
                <input type="text" class="form-control">
                <span class="glyphicon glyphicon-search form-control-feedback"></span>
            </div>
            <ul class="list-group">
                <listItem v-for="(competence, index) in competences" :id="competence.id" :name="competence.name" :key="index"></listItem>
            </ul>
        </div>
    </div>
</template>
<script>
    import listItem from '../components/compitenceListItem.vue'
    export default {
        name: 'competences',
        components: {listItem},
        data: ()=>{
            return {
                competences: [
                    {name: 'a', id: 1},
                    {name: 'b', id: 2},
                    {name: 'c', id: 3}
                    ]
            }
        }
    }
</script>