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

  .cards{
    padding: 30px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
    gap: 30px;
  }
  
  
  @media( max-width: 1023px) {
    .cards{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media( max-width: 600px) {
    .cards{
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
  
</style>
