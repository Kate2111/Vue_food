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

        <div class="cards">
          <!-- <pre>
            {{ meals }}
          </pre> -->
         
          <div class="cards__item" v-for="meal in meals">
              <img :src="meal.strMealThumb" :alt="meal.strMeal">
              <div class="cards__descr">
                <h3 class="cards__info">{{meal.strMeal}}, {{meal.strArea}}</h3>
                <a class="cards__button" :href="meal.strYoutube">YouTube</a>
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
})  */
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

.cards{
  padding: 30px 20px;
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
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