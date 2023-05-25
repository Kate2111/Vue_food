<template>
    <div class="container">
        <div class="form__wrapper">
            <input 
            type="text" 
            v-model="keyword"
            class="form__search" 
            placeholder="Search for ingredients">
        </div>
        <div class="ingredients">
            <h1 class="title">Ingredients</h1>
            <router-link 
                class="ingredient" 
                :to="{
                    name: 'byIngredient', 
                    params: {ingredient: ingredient.strIngredient}}" 
                v-for="ingredient in computedIngredients" 
                :key="ingredient.idIngredient"
            >
                <div>{{ingredient.strIngredient}}</div>
            </router-link> 
        </div>
    </div>
    
</template>

<script setup>
import axiosClient from '../axios-Client';
import { onMounted, ref } from 'vue'
import { computed } from "@vue/reactivity"

const keyword = ref('');
const ingredients = ref([]);
const computedIngredients = computed(() => {
    if (!computedIngredients) return ingredients;
    return ingredients.value.filter((i) => 
        i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
})


onMounted(() => {
    axiosClient.get('list.php?i=list')
        .then(({data}) => {
            ingredients.value = data.meals
        })
})

</script>

<style scoped>

.form__wrapper{
    margin-top: 30px;
}
.ingredients{
    display: flex;
    flex-wrap: wrap;
    gap: 15px 25px;
    justify-content: center;
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