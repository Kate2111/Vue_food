<template>
    <div class="cards__item">
        <RouterLink :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
          <img 
            :src="meal.strMealThumb" 
            :alt="meal.strMeal"
          />
        </RouterLink>
        
        <div class="cards__descr">
          <h3 class="cards__info">{{meal.strMeal}}, {{meal.strArea}}</h3>
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
    width: 100%;
    object-fit: cover;
  }
  
  .cards__descr{
    padding: 0 10px 10px;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
</style>