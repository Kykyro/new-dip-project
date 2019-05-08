<template>
  <div id="app">
    <Header_template></Header_template>
    <router-view/>
  </div>
</template>

<script>
  import Header_template from "./components/header";
  export default {
      name: 'app',
      components: {Header_template}
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
