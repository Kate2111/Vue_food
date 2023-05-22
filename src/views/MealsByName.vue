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

        <div class="cards">
          <div class="cards__item" v-for="meal in meals">
              <RouterLink :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
                <img 
                  :src="meal.strMealThumb" 
                  :alt="meal.strMeal"
                />
              </RouterLink>
              
              <div class="cards__descr">
                <h3 class="cards__info">{{meal.strMeal}}, {{meal.strArea}}</h3>
                <a class="cards__button" :href="meal.strYoutube" target="_blank">YouTube</a>
              </div>
              
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";


const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  let word = keyword.value.slice(0, 1).toUpperCase() + keyword.value.slice(1);
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

<style scoped>
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


.cards__item{
  display: grid;
  justify-items: stretch;
  gap: 10px;
  background-color:rgb(249, 249, 248);
  border-radius: 10px;
  box-shadow: 2px 2px 5px grey;
}

img{
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 250px;
  width: 100%;
  object-fit: cover;
}

.cards__descr{
  padding: 0 10px 10px;
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cards__button{
  width: 100px;
  height: 30px;
  text-align: center;
  background-color: rgba(128, 128, 128, 0.5);
  padding: 2px 10px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px grey;
}

.cards__button:hover{
  cursor: pointer;
  background-color: rgba(128, 128, 128, 0.3);

}






</style>