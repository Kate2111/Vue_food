<template>
    <div class="container">
        <div class="ingredients">
            <h1 class="ingredients__title">Ingredients</h1>
            <router-link 
                class="ingredient" 
                :to="{
                    name: 'byIngredient', 
                    params: {ingredient: ingredient.idIngredient}}" 
                v-for="ingredient in ingredients" 
                :key="ingredient.idIngredient"
            >
                <div>{{ingredient.strIngredient}}</div>
            </router-link> >
        </div>
    </div>
    
</template>

<script setup>
import axiosClient from '../axios-Client';
import { onMounted, ref } from 'vue'

const ingredients = ref([])
onMounted(() => {
    axiosClient.get('list.php?i=list')
        .then(({data}) => {
            ingredients.value = data.meals
        })
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