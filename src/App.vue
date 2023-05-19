<template class="app">
  <router-view></router-view>
</template>

<script>

</script>



<style>
  * {
    box-sizing: border-box;
  }

  .container{
    width: 1300px;
    margin: 0 auto;
  }

  @media (max-width: 620px) {
    .container {
      width: 550px;
    }
  }

  @media (max-width: 570px) {
    .container {
      width: 400px;
    }
  }

  @media (max-width: 450px) {
    .container {
      width: 300px;
    }
  }
</style>
