<template>
    <div class="container">
        <div class="form__letters">
            <router-link v-for="letter of letters" :key="letter" :to="{name: 'byLetter', params: {letter}}" class="letter_active">
                <span>{{ letter }}</span>
            </router-link>
        </div>

        <meals :meals="meals"/>
    </div>
     
</template>

<script setup>
import Meals from '../components/Meals.vue'
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
    flex-wrap: wrap;
}

.letter_active:hover{
    font-weight: 700;
}

@media (max-width: 450px) {
    .form__letters{
       font-size: 12px;
    }
}
</style>