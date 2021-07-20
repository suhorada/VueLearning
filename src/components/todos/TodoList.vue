<template>
  <div>
    <ul>
      <TodoItem
        v-for="todo of filteredItems"
        v-bind:todo="todo"
        v-bind:key="todo.id"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/todos/TodoItem.vue'
import { mapGetters } from 'vuex'

export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
  },
  computed: {
    ...mapGetters(['allTodos', 'currentList']),
    filteredItems () {
      if (this.currentList !== 'All') {
        return this.allTodos.filter((todo) => todo.listName === this.currentList)
      } else {
        return this.allTodos
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
