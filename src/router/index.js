import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue'
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngridient from '../views/MealsByIngridient.vue'


const routes = [
    {
        path: '/',
        name: 'DefaultLayout',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/letter/:letter',
                name: 'byLetter',
                component: MealList
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/by-ingridient/:ingridient?',
                name: 'byIngridient',
                component: MealsByIngridient
            }
        ]
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;