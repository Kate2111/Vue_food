<template>
    <div class="form">
        <div class="form__wrapper">
            <input 
            type="text" 
            v-model="keyword"
            @change="searchMeals"
            class="form__search" 
            placeholder="Search for Meals">
        </div>

        <div>
            <div v-for="meal in meals" :key="meal.idMeal">
                <img :src="meal.strMealThumb" :alt="strMeal">
            </div>

            
        </div>
    </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

/* onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
}) */
       
</script>

<style scoped>
.form{
    margin: 30px 30px 10px;
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