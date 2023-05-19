<template>
    <div class="form">
        <div class="form__wrapper">
            <input 
            type="text" 
            v-model="keyword"
            @change="featchMeals"
            class="form__search" 
            placeholder="Search for Meals">
        </div>

        <div>
          <div v-for="meal in meals">
            <div v-for="elem in meal">
                {{ elem.strDrink }}
                
                <img :src="elem.strMealThumb" :alt="elem.strMeal">
            </div>
          </div>

           

            
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
        data() {
            return {
                meals: [],
                keyword: ''
            }
        }, 
        methods: {
            async featchMeals() {
                this.isLoading = true;
                try{
                    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.keyword}`);
                    
                    this.meals = response.data;                 
                } catch(e) {
                    alert('error')
                } finally{
                    this.isLoading = false;
                }
            }

        },
    }
       
</script>

<style scoped>
.form{
    margin: 30px 30px 10px;
}
.form__wrapper{
    display: flex;
    padding: 8px;
    justify-content: center;
}

.form__search{
    border: grey solid 2px;
    border-radius: 5px;
    width: 100%;
    outline: none;
}

input:focus {
    outline: none;
}
</style>