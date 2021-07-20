import { getLS, setLS } from '../localStorage'
import { ADD_TODO, DELETE_TODO, DELETE_TODOS_IN_LIST, EDIT_TODO, LOAD_TODOS_LS } from './mutations.type'

export const state = {
  todos: []
}

export const actions = {
  addTodo (context, todo) {
    context.commit(ADD_TODO, todo)
  },
  deleteTodo (context, id) {
    context.commit(DELETE_TODO, id)
  },
  editTodo (context, id) {
    context.commit(EDIT_TODO, id)
  },
  getTodosFromLS (context) {
    context.commit(LOAD_TODOS_LS)
  }
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
  [LOAD_TODOS_LS] (state) {
    if (getLS('todos')) {
      state.todos = getLS('todos')
    } else {
      state.todos = []
    }
  }
}

export const getters = {
  allTodos () {
    return state.todos
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
