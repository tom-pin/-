import Vuex from 'vuex'
import Vue from 'vue'
import tab from './tab'
import user from './user'
import graph from './graph'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tab,
    user,
    graph,
  },
})
