<template>
    <div>
        <h2>Todo list component</h2>
        <router-link to="/">Home</router-link>
        <hr>
        <AddTodo @addTodo="addTodo"/>
        <hr>
        <Loader v-if="loading"/>
        <TodoList
            v-else-if="todos.length"
            v-bind:todos="todos"
            @todoDelete="todoDelete"
        />
        <p v-else>No todods</p>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import Loader from '@/components/Loader.vue'
export default {
  name: 'App',
  data () {
    return {
      loading: true,
      todos: [
        { id: 1, text: 'zxc', completed: false },
        { id: 2, text: 'zxc 322', completed: false },
        { id: 3, text: '322 zxc', completed: false }
      ]
    }
  },
  components: {
    TodoList, AddTodo, Loader
  },
  methods: {
    todoDelete (id) {
      this.todos = this.todos.filter((el) => el.id !== id)
    },
    addTodo (todo) {
      // this.todos.push(todo)
      this.$store.dispatch('addTodo', {todo: {id: 1, text: 228, completed: false}, listName: 'list1'})
    },
    load () {
      this.loading = false
    }
  },
  mounted () {
    this.load()
  }
}
</script>
