<template>
    <nav class="navbar navbar-default" id="header">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-main">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" to="/">РКЦ System</router-link>
            </div>
            <div class="collapse navbar-collapse" id="navbar-main">
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'header_template'
    }
</script>
<style>

</style>