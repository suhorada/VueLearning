import { setLS } from '../localStorage'
import { ADD_TODO } from './actionst.type'

// state = {
//   todos: {
//     listName:
//       [
//         {
//           id: number,
//           text: string,
//           completed: bool
//         }
//       ]
//     }
//   ]
// }
export const state = {
  todos: {/* list1: */}
}

export const actions = {
  addTodo (context, todo) {
    // console.log('ct-------------------', context)
    context.commit(ADD_TODO, todo)
  }
}

export const mutations = {
  [ADD_TODO] (state, todo) {
    // console.log('todo==============', todo)
    if (state.todos[todo.listName]) {
      state.todos[todo.listName].push(todo.todo)
    } else state.todos[todo.listName] = [todo.todo]
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
