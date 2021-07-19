<template>
    <div>
        <h2>Todo list component</h2>
        <router-link to="/">Home</router-link>
        <hr>
        <AddTodo @addTodo="addTodo"/>
        <hr>
        <Loader v-if="loading"/>
        <TodoList
            v-else-if="allTodos.length"
        />
            <!-- @todoDelete="todoDelete" -->
            <!-- v-bind:todos="todos" -->
        <p v-else>No todods</p>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import Loader from '@/components/Loader.vue'
import { mapGetters } from 'vuex'
import { getLS } from '../localStorage'
export default {
  name: 'App',
  data () {
    return {
      loading: true
      // todos: this.$store.
    }
  },
  computed: {
    ...mapGetters(['allTodos'])
  },
  components: {
    TodoList, AddTodo, Loader
  },
  methods: {
    todoDelete (id) {
      this.todos = this.todos.filter((el) => el.id !== id)
    },
    addTodo (todo) {
      this.$store.dispatch('addTodo', {todo: {id: 1, text: 228, completed: false}, listName: 'list1'})
    },
    load () {
      if (getLS('todos')) {
        this.$store.dispatch('getTodosFromLS')
      }
      this.loading = false
    }
  },
  mounted () {
    this.load()
  }
}
</script>
