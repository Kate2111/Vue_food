<template>
    <div class="form">
        
        
        <!-- <div class="form__letters">
            <router-link v-for="letter in letters" :key="letter" class="letter_active">
                <span>{{ letter }}</span>
            </router-link>
        </div> -->
    </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import axiosClient from '../axios-Client.js';

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
