<template>
  <div id="app">
    <h1>Todo list test</h1>
    <hr>
    <!-- <AddTodo @addTodo="addTodo"/> -->
    <hr>
    <router-view/>
    <!-- <TodoList
      v-bind:todos="todos"
      @todoDelete="todoDelete"
    /> -->
  </div>
</template>

<script>
// import TodoList from '@/components/TodoList.vue'
// import AddTodo from '@/components/AddTodo.vue'
// export default {
//   name: 'App',
//   data () {
//     return {
//       todos: [
//         { id: 1, text: 'zxc', completed: false },
//         { id: 2, text: 'zxc 322', completed: false },
//         { id: 3, text: '322 zxc', completed: false }
//       ]
//     }
//   },
//   components: {
//     TodoList, AddTodo
//   },
//   methods: {
//     todoDelete (id) {
//       this.todos = this.todos.filter((el) => el.id !== id)
//     },
//     addTodo (todo) { this.todos.push(todo) }
//   }
// }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
