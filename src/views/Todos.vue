<template>
  <div>
      <h2>Todo list component</h2>
      <router-link to="/">Home</router-link>
      <router-link to="/todos">Todos</router-link>
      <router-link to="/lists">Lists</router-link>
      <hr>
      <div class="add-bar">
        <SelectList/>
        <AddTodo v-if="currentList!=='All'"/>
      </div>
      <hr>
      <Loader v-if="loading"/>
      <TodoList
          v-bind:list="currentList"
          v-else-if="allTodos.length"
      />
      <p v-else>No todods</p>
  </div>
</template>

<script>
import TodoList from '@/components/todos/TodoList.vue'
import AddTodo from '@/components/todos/AddTodo.vue'
import Loader from '@/components/Loader.vue'
import SelectList from '@/components/lists/SelectList.vue'
import { mapGetters } from 'vuex'
import { getLS } from '../localStorage'
export default {
  name: 'App',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters(['allTodos', 'currentList'])
  },
  components: {
    TodoList, AddTodo, Loader, SelectList
  },
  methods: {
    todoDelete (id) {
      this.todos = this.todos.filter((el) => el.id !== id)
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

<style scoped>
  .add-bar {
    position: relative;
    display: flex;
    width: 600px;
    justify-content: space-between;
    align-items: center;
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>
