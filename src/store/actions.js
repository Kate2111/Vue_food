import axiosClient from '../axios-Client.js';

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
        debugger;
      commit('setSearchedMeals', data.meals)
    })
}