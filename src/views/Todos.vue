<template>
    <div>
        <h2>Todo list component</h2>
        <router-link to="/">Home</router-link>
        <hr>
        <div class="add-bar">
          <SelectList/>
          <AddTodo @addTodo="addTodo"/>
        </div>
        <hr>
        <Loader v-if="loading"/>
        <TodoList
            v-else-if="allTodos.length"
        />
        <p v-else>No todods</p>
    </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import Loader from '@/components/Loader.vue'
import SelectList from '@/components/SelectList.vue'
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
    ...mapGetters(['allTodos'])
  },
  components: {
    TodoList, AddTodo, Loader, SelectList
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

<style scoped>
  .add-bar {
    position: relative;
    display: flex;
    width: 500px;
    justify-content: space-between;
    align-items: center;
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>
