import Vue from 'vue'
import Vuex from 'vuex'

import todos from '@/store/todos.module'
import lists from '@/store/lists.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos,
    lists
  }
})
