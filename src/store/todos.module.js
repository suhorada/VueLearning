import { setLS } from '../localStorage'
import { ADD_TODO } from './actionst.type'

export const state = {
  todos: []
}

export const actions = {
  addTodo (context, todo) {
    context.commit(ADD_TODO, todo)
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
