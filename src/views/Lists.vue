<template>
  <div>
    <h2>Todo list component</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/todos">Todos</router-link>
    <router-link to="/lists">Lists</router-link>
    <hr>
    <div class="add-bar">
      <SelectList/>
    </div>
    <Lists/>
    <p>No lists</p>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'
import SelectList from '@/components/SelectList.vue'
import Lists from '@/components/Lists.vue'
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
    Loader, SelectList, Lists
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
    width: 600px;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>
