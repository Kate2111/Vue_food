<template>
    <div class="container">
        <div class="meal-info">
            <div class="meal-info__image">
                <div class="meal-info__links">
                    <a :href="meal.strCategory" class="meal-info__link"> <strong>Category:</strong> {{meal.strCategory}}</a>
                    <a :href="meal.strArea" class="meal-info__link"> <strong>Area:</strong> {{meal.strArea}}</a>
                    <a :href="meal.strTags" class="meal-info__link"> <strong>Tags:</strong> {{meal.strTags}}</a>  
                </div>
                <img
                    class="meal-info__img" 
                    :src="meal.strMealThumb" 
                    :alt="meal.strMeal"
                />
                <a :href="meal.strYoutube" class="meal-info__link">Youtube</a>
            </div>
            <div class="meal-info__inner">
                <h3 class="meal-info__title">{{meal.strMeal}}</h3>
                <p class="meal-info__descr">{{meal.strInstructions}}</p>
                <div class="meal-info__products">
                    <div class="meal-info__product">
                        <h2 class="meal-info__subtitle">Ingredient:</h2>
                        <ul>
                            <template  v-for="(elem, i) in new Array(20)">
                                <li v-if="meal[`strIngredient${i+1}`]">
                                    {{i+1}}. {{meal[`strIngredient${i+1}`]}} {{ elem }}
                                </li>
                            </template>
                        </ul>
                    </div>
                    <div class="meal-info__product">
                        <h2 class="meal-info__subtitle">Measure:</h2>
                        <ul>
                            <template  v-for="(elem, i) in new Array(20)">
                                <li v-if="meal[`strMeasure${i+1}`]">
                                    {{i+1}}. {{meal[`strMeasure${i+1}`]}} {{ elem }}
                                </li>
                            </template>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>

    import { onMounted, ref } from 'vue'
    import { useRoute } from 'vue-router';
    import axiosClient from '../axios-Client';

    const route = useRoute();
    const meal = ref({});

    onMounted(() => {
        axiosClient.get(`lookup.php?i=${route.params.id}`)
            .then(({data}) => {
                meal.value = data.meals[0] || {}
            })
    })
</script>

<style scoped>

    .meal-info__links{
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
    }

    
    .meal-info{
        padding: 30px 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .meal-info__inner{
        padding: 10px 30px;
    }

    .meal-info__title{
        font-size: 36px;
    }

    .meal-info__descr {
        padding: 4% 0;
    }

    .meal-info__products {
        display: flex;
        justify-content: space-between;
    }

    .meal-info__product{
        flex: 1;
    }

    .meal-info__subtitle{
        font-size: 23px;
    }
</style>