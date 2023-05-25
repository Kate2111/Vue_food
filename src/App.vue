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

  .title{
    font-size: 36px;
    width: 100%;
    padding-left: 7px;
  }
  
  @media( max-width: 1200px) {
    .container{
      width: 900px;
    }
  }

  @media( max-width: 1023px) {
    .container{
      width: 700px;
    }
  }

  @media (max-width: 750px) {
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
