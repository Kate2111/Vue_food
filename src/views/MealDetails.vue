<template>
    <div class="container">
        <div class="meal-info">
            <div class="meal-info__image">
                <div class="meal-info__img">
                    <img class="main"
                        :src="meal.strMealThumb" 
                        :alt="meal.strMeal"
                    />
                </div>
                <my-button :href="meal.strYoutube">Youtube</my-button>
                <div class="meal-info__links">
                    <a :href="meal.strCategory" class="meal-info__link"> <strong>Category:</strong> {{meal.strCategory}}</a>
                    <a :href="meal.strArea" class="meal-info__link"> <strong>Area:</strong> {{meal.strArea}}</a>
                    <a :href="meal.strTags" class="meal-info__link"> <strong>Tags:</strong> {{meal.strTags}}</a>  
                </div>
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
    import MyButton from '@/components/UI/MyButton.vue'
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

    .main{
        width: 100%;
        height: 100%;
        object-fit: cover;    
        position: absolute;
        top: 0;
        left: 0;
    }
      
    .meal-info{
        padding: 30px 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .meal-info__links{
        display: flex;
        flex-direction: column;
        padding: 10px 0;
    }
    .meal-info__img{
        position: relative;
        max-width: 620px;
        height: 450px;
        margin: 20px 0 20px 0;
        padding: 0 0 58% 0;
        overflow: hidden; 
        border-radius: 50px;
        box-shadow: 2px 2px 20px grey; 
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


    @media (max-width: 768px) {
        .meal-info{
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 570px) {
        .meal-info__img{
            height: 390px;
        }
    }

    @media (max-width: 450px) {
        .meal-info__img{
            width: 290px;
            height: 280px;
        }
        .meal-info__title{
            font-size: 31px;
        }
        .meal-info__links{
            font-size: 12px;
        }
    }
</style>