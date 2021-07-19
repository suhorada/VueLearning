import Vue from 'vue'
import Vuex from 'vuex'

// import home from './home.module'
// import auth from './auth.module'
// import article from './article.module'
// import profile from './profile.module'
import todos from '@/store/todos.module'
import lists from '@/store/lists.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos,
    lists
    // article,
    // profile
  }
})
