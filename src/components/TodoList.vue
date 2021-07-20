<template>
  <div>
    <ul>
      <TodoItem
        v-for="todo of allTodos"
        v-bind:todo="todo"
        v-bind:key="todo.id"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
import { mapGetters } from 'vuex'

export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
  },
  computed: {
    ...mapGetters(['allTodos'])
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
