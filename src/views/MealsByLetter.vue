<template>
    <div class="container">
        <div class="form__letters">
            <router-link v-for="letter of letters" :key="letter" :to="{name: 'byLetter', params: {letter}}" class="letter_active">
                <span>{{ letter }}</span>
            </router-link>
        </div>

        <div class="cards">
            <MealItem  v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
        </div>
    </div>
     
</template>

<script setup>
import MealItem from '@/components/MealItem.vue'
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>

<style scoped>

.form__letters{
    padding: 30px 0;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.letter_active:hover{
    font-weight: 700;
}

@media (max-width: 620px) {
    .form__letters {
        display: none;
    }
}
</style>