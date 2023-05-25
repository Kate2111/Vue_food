<template class="app">
    <navbar></navbar>
    <main>
        <router-view></router-view>
    </main>
  </template>
  
  <script>
    import navbar from '../components/Navbar.vue';
  
    export default {
      components: {navbar}
    }
  </script>
  
  <style>

  </style>
  