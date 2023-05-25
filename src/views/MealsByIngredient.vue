<template>
    <div class="container">
        <meals :meals="meals"/>
    </div>
    
</template>

<script setup>
import Meals from '../components/Meals.vue'
import { useRoute } from "vue-router"
import { onMounted, ref } from 'vue'
import { computed } from "@vue/reactivity"
import store from "../store"

const route = useRoute();
const ingredient = computed(() => store.state.ingredient)
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
    store.dispatch('searchMealsIngredient', route.params.ingredient)
})

</script>

<style scoped>

</style>