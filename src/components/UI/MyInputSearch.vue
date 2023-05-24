<template>
    <div class="form__wrapper">
        <input 
            type="text" 
            v-model="keyword"
            @change="searchMeals"
            class="form__search" 
            placeholder="Search for Meals"
        >
      </div>
</template>

<script>
    export default {
        proprs:{

        }
    }
</script>

<style>
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