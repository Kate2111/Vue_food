<template>
    <div class="card__item">
        <RouterLink :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
          <img class="card__image"
            :src="meal.strMealThumb" 
            :alt="meal.strMeal"
          />
        </RouterLink>
        
        <div class="card__descr">
          <h3 class="card__info">{{meal.strMeal}}, {{meal.strArea}}</h3>
          <my-button :href="meal.strYoutube" >YouTube</my-button>
        </div>
        
    </div>
</template>

<script setup>
    import MyButton from '@/components/UI/MyButton.vue'
    const {meal} = defineProps({
        meal: {
            required: true,
            type: Object,
        }
    })
</script>

<style>

.card__item{
    display: grid;
    justify-items: stretch;
    gap: 10px;
    background-color:rgb(249, 249, 248);
    border-radius: 10px;
    box-shadow: 2px 2px 5px grey;
  }
  
  .card__image{
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 280px;
    width: 100%;
    object-fit: cover;
  }
  
  .card__descr{
    padding: 0 10px 10px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }


  
</style>