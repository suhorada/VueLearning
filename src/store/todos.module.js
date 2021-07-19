import { getLS, setLS } from '../localStorage'
import { ADD_TODO, DELETE_TODO, EDIT_TODO, LOAD_TODOS_LS } from './actionst.type'

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
    // if (state.todos[todo.listName]) {
    //   state.todos[todo.listName].push(todo.todo)
    // } else {
    //   state.todos[todo.listName] = [todo.todo]
    // }
    // setLS('todos', state.todos)
    if (state.todos) {
      state.todos.push(todo.todo)
    } else {
      state.todos = [todo.todo]
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
  [EDIT_TODO] (state, todo) {
    if (state.todos) {
      state.todos.find((el) => el.id === todo.id).text = todo.text
      // state.todos = state.todos.filter((el) => el.id !== id)
    } else {
      state.todos = []
    }
    setLS('todos', state.todos)
  },
  [LOAD_TODOS_LS] (state) {
    if (state.todos) {
      state.todos = getLS('todos')
      // state.todos = state.todos.filter((el) => el.id !== id)
    } else {
      state.todos = []
    }
    // setLS('todos', state.todos)
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
