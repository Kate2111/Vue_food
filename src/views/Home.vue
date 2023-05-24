<template>

</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from '../axios-Client.js';


onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list');
  console.log(response.data);

});


</script>

<style scoped>

   

    
</style>
