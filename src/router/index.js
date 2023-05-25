import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue'
import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import Ingredients from '../views/Ingredients.vue'
import MealDetails from '../views/MealDetails.vue'


const routes = [
    {
        path: '/Vue_food/',
        name: 'DefaultLayout',
        component: DefaultLayout,
        children: [
            {
                path: '/Vue_food/',
                name: 'home',
                component: Home
            },
            {
                path: '/Vue_food/by-name',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/Vue_food/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/Vue_food/by-ingredient/:ingredient',
                name: 'byIngredient',
                component: MealsByIngredient
            },
            {
                path: '/Vue_food/ingredients',
                name: 'ingredients',
                component: Ingredients
            },
            {
                path:'/Vue_food/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            }
        ]
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;