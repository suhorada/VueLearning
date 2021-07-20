import { setLS } from '../localStorage'
import { ADD_LIST, SELECT_LIST } from './actionst.type'

export const state = {
  listNames: ['MyList1', 'TestList'],
  selected: 'All'
}

export const actions = {
  addList (context, name) {
    context.commit(ADD_LIST, name)
  },
  selectList (context, name) {
    context.commit(SELECT_LIST, name)
  }
}

export const mutations = {
  [ADD_LIST] (state, name) {
    if (!state.listNames.some((el) => el === name)) {
      if (state.listNames) {
        state.listNames.push(name)
      } else {
        state.listNames = [name]
      }
      setLS('lists', state.listNames)
    }
  },
  [SELECT_LIST] (state, name) {
    if (state.listNames.some((el) => el === name)) {
      state.selected = name
    } else {
      state.selected = 'All'
    }
    setLS('lists', state.listNames)
  }
}

export const getters = {
  allLists () {
    return state.listNames
  },
  currentList () {
    return state.selected
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
