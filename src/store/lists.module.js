import { setLS } from '../localStorage'
import { ADD_LIST } from './actionst.type'

export const state = {
  listNames: []
}

export const actions = {
  addTodo (context, name) {
    context.commit(ADD_LIST, name)
  }
}

export const mutations = {
  [ADD_LIST] (state, name) {
    if (state.todos) {
      state.listNames.push(name)
    } else {
      state.listNames = [name]
    }
    setLS('lists', state.listNames)
  }
}

export const getters = {
  allLists () {
    return state.listNames
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
