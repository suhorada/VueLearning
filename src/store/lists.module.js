import { getLS, setLS } from '../localStorage'
import { ADD_LIST, DELETE_LIST, DELETE_TODOS_IN_LIST, EDIT_LIST, LOAD_LISTS_LS, SELECT_LIST } from './mutations.type'

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
  },
  getListsFromLS (context) {
    context.commit(LOAD_LISTS_LS)
  },
  deleteList (context, name) {
    context.commit(DELETE_LIST, name)
    context.commit(DELETE_TODOS_IN_LIST, name)
  },
  editList (context, name, newName) {
    context.commit(EDIT_LIST, name, newName)
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
  },
  [LOAD_LISTS_LS] (state) {
    if (getLS('lists')) {
      state.listNames = getLS('lists')
    } else {
      state.listNames = []
    }
  },
  [EDIT_LIST] (state, name, newName) {
    if (!state.listNames.some((el) => el === name)) {
      if (state.listNames) {
        state.listNames.map((el) => {
          if (el === name) {
            return newName
          } else {
            return el
          }
        })
      }
      setLS('lists', state.listNames)
    }
  },
  [DELETE_LIST] (state, name) {
    state.listNames = state.listNames.filter((el) => el !== name)
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
