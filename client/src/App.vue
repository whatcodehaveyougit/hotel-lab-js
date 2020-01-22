<template>
  <div id="app">
    <customer-form />
    <customers-list />
  </div>
</template>

<script>
import CustomerForm from './components/CustomerForm.vue'
import CustomersList from './components/CustomersList.vue'

export default {
  name: 'app',
  components: {
    'customer-form': CustomerForm,
    'customers-list': CustomersList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
