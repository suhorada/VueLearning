import { getLS, setLS } from '../localStorage'
import { ADD_TODO, DELETE_TODO, DELETE_TODOS_IN_LIST, EDIT_TODO, EDIT_TODOS_LIST, LOAD_TODOS_LS, SET_TODOS_SEARCH } from './mutations.type'

export const state = {
  todosSearch: '',
  todos: []
}

export const actions = {
  addTodo (context, todo) { context.commit(ADD_TODO, todo) },
  deleteTodo (context, id) { context.commit(DELETE_TODO, id) },
  editTodo (context, id) { context.commit(EDIT_TODO, id) },
  getTodosFromLS (context) { context.commit(LOAD_TODOS_LS) },
  setTodosSearch (context, text) { context.commit(SET_TODOS_SEARCH, text) }
}

export const mutations = {
  [ADD_TODO] (state, todo) {
    if (state.todos) {
      state.todos.push(todo)
    } else {
      state.todos = [todo]
    }
    setLS('todos', state.todos)
  },

  [DELETE_TODO] (state, id) {
    if (state.todos) {
      state.todos = state.todos.filter((el) => el.id !== id)
    } else {
      state.todos = []
    }
    setLS('todos', state.todos)
  },

  [DELETE_TODOS_IN_LIST] (state, list) {
    if (state.todos) {
      state.todos = state.todos.filter((el) => el.listName !== list)
    } else {
      state.todos = []
    }
    setLS('todos', state.todos)
  },
  [EDIT_TODO] (state, todo) {
    if (state.todos) {
      state.todos.find((el) => el.id === todo.id).text = todo.text
    } else {
      state.todos = []
    }
    setLS('todos', state.todos)
  },
  [EDIT_TODOS_LIST] (state, list) {
    if (state.todos) {
      state.todos.map((el) => {
        if (el.listName === list.lastList) {
          el.listName = list.newList
        }
        return el.listName
      })
    } else {
      state.todos = []
    }
    setLS('todos', state.todos)
  },

  [LOAD_TODOS_LS] (state) {
    if (getLS('todos')) {
      state.todos = getLS('todos')
    } else {
      state.todos = []
    }
  },
  [SET_TODOS_SEARCH] (state, text) { state.todosSearch = text }
}

export const getters = {
  todosSearch () { return state.todosSearch },
  allTodos () {
    let filtered = []
    filtered = state.todos.sort((el1, el2) => el1.id - el2.id).sort((el) => el.completed ? 1 : -1)
    if (state.todosSearch !== '') {
      filtered = state.todos.filter((el) => el.text.indexOf(state.todosSearch, 0) !== -1)
    }
    return filtered
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
