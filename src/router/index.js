import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue'
import LoginPage from '../components/LoginPage.vue'
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngridient from '../views/MealsByIngridient.vue'
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
                path: '/Vue_food/letter/:letter',
                name: 'byLetter',
                component: MealList
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
                path: '/Vue_food/by-ingridient/:ingridient?',
                name: 'byIngridient',
                component: MealsByIngridient
            },
            {
                path:'/Vue_food/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            }
        ]
    },
    {
        path: '/Vue_food/guest',
        name: 'LoginPage',
        component: LoginPage
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;