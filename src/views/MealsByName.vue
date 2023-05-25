<template>
    <div class="form">
      <div class="container">
        <div class="form__wrapper">
          <input 
          type="text" 
          v-model="keyword"
          @change="searchMeals"
          class="form__search" 
          placeholder="Search for Meals">
        </div>

        <meals :meals="meals"/>
      </div>
    </div>
</template>

<script setup>
import Meals from '../components/Meals.vue'
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";


const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  let word = keyword.value.toLowerCase();
  if (keyword.value) {
    store.dispatch("searchMeals", word);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
}) 
</script>

<style>
.form{
  padding: 30px 0;
}
.form__wrapper{
    display: flex;
    padding: 8px;
    justify-content: center;
}

.form__search{
    border: grey solid 2px;
    border-radius: 5px;
    width: 100%;
    outline: none;
}

input:focus {
    outline: none;
}



</style>