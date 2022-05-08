import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    debitCards: [
      {
          cardHolder: "Mark Henry",
          cardNumber: 4012224555232020,
          cardExpiry: "2023-5-15 9:16:8",
          cardCvv: "213"
      },
      {
          cardHolder: "John Cena",
          cardNumber: 4012222535532020,
          cardExpiry: "2023-8-25 20:21:10",
          cardCvv: "122"
      },
    ]
  },
  getters: {
  },
  mutations: {
    ["ADD_DEBIT_CARD"] (state, data) {
      state.debitCards.push(data);
    }
  },
  actions: {
  },
  modules: {
  }
})
