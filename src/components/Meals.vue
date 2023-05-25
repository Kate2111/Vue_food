<template>
    <div class="cards">
        <MealItem  v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
    </div>
    <div class="info" v-if="!meals.length">
      There are no meals
    </div>
</template>

<script setup>
import MealItem from '../components/MealItem.vue'

const { meals } = defineProps({
    meals: {
      required: true,
      type: Array,
      default: () => []
    }
})
</script>

<style scoped>
.cards{
    padding: 30px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
    gap: 30px;
  }

.info{
  text-align: center;
  font-size: 20px;
}
  
  @media( max-width: 1023px) {
    .cards{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media( max-width: 600px) {
    .cards{
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
</style>