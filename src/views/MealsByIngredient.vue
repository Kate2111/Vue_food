<template>
    <div class="container">
        <div class="cards">
            <MealItem  v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
        </div>
        <div v-if="!meals.length">
            There are no meals
        </div>
    </div>
    
</template>

<script setup>
import MealItem from '@/components/MealItem.vue'
import { useRoute } from "vue-router"
import { onMounted, ref } from 'vue'
import { computed } from "@vue/reactivity"
import store from "../store"

const route = useRoute();
const meals = computed(() => store.state.meals);

onMounted(() => {
    store.dispatch('searchMealsIngredient', route.params.ingredient)
})

</script>

<style scoped>
.ingredients{
    display: flex;
    flex-wrap: wrap;
    gap: 15px 25px;
    justify-content: center;
    margin-top: 30px;
}

.ingredients__title{
    font-size: 36px;
    width: 100%;
}

.ingredient{
    width: 400px;
    height: 50px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color:#fffffdc4;
    box-shadow: 2px 2px 2px rgba(128, 128, 128, 0.567);
    cursor: pointer;
}

.ingredient:hover{
    font-weight: 500;
    box-shadow: 2px 2px 2px rgb(128, 128, 128);
}
</style>