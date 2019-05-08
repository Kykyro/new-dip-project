<template>
    <div class="expert">
        <div><a href="#">Эксперт</a></div>
    </div>
</template>
<script>
    export default {
        name: 'experts',
        data() {
            return {
                arr: [1,2,3]
            }
        }
    }
</script>
<style>
    .expert{
        display: flex;
        justify-content: space-around;
        padding: 0 10px 3px 10px;

    }
</style>