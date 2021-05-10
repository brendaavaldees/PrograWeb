import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    facts: [],
    fact: {},
  },
  mutations: {
    SET_FACTS(state, facts){
      state.facts = facts;
    },
    SET_FACT(state, fact){
      state.fact = fact;
    }
  },
  actions: {
    getFacts({ commit }){
      axios.get('https://cat-fact.herokuapp.com/facts')
      .then(response => {
        commit('SET_FACTS', response.data);
      })
    },
  },
  modules: {
  }
})
