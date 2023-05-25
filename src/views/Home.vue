<template>
  <div class="container">
    <meals :meals="meals"/>
  </div>
 
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from '../axios-Client.js';
import Meals from '../components/Meals.vue';
import store from '../store';

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});

</script>

<style scoped>
.title{
  margin-top: 20px;
}
   

    
</style>
