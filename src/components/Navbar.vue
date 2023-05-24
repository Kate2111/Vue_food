<template>
    <header class="menu">
        <div class="container">
            <div class="menu__inner">
                <router-link class="menu__link" :to="{name: 'home'}">Home</router-link>
                <div class="menu__wrapper">
                    <router-link class="menu__link" :to="{name: 'byName'}">Search Meals</router-link>
                    <router-link class="menu__link" :to="{name: 'byLetter'}">Meals By Letter</router-link>
                    <router-link class="menu__link" :to="{name: 'ingredients'}">Meals By Ingridients</router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style>
    .menu{
        display: flex;
        align-items: center;
        background-color: rgba(239, 239, 239);
        height: 60px;
        box-shadow: 0px 2px 3px grey;
    }
    .menu__inner{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .menu__wrapper{
        display: flex;
        gap: 50px;
    }

    .menu__link{
        transition: all .2s;
    }

    .menu__link:hover{
        text-shadow: 2px 2px 2px rgba(128, 128, 128, 0.6);
       
    }

    @media (max-width: 620px) {
        .menu__wrapper {
            flex-direction: column;
            padding: 5px;
            gap: 0;
        }
        .menu__link{
            font-size: 12px;
        }
    }
</style>