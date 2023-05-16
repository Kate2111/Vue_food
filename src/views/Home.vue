<template>
    <div class="form">
        <div class="form__wrapper">
            <input type="text" class="form__search" placeholder="Search for Meals">
        </div>
        
        <div class="form__letters">
            srbgdrtg
            <router-link v-for="letter in letters" :key="letter" class="letter_active">
                <span>{{ letter }}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import axiosClient from '../axios-Client';

export default {
  data() {
    return {
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    };
  },
  mounted() {
    onMounted(async () => {
      const response = await axiosClient.get('/list.php?i=list');
      console.log(response.data);
    });
  }
};
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

    .form__letters{
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .letter_active:hover{
        font-weight: 700;
    }

    @media (max-width: 620px) {
        .form__letters {
            display: none;
        }
    }
</style>
