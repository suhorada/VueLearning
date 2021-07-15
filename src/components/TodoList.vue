<template>
  <div>
    <ul>
      <TodoItem
        v-for="todo of todos"
        v-bind:todo="todo"
        v-bind:key="todo.id"
        v-on:todoDelete="todoDelete"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    todoDelete (id) {
      this.$emit('todoDelete', id)
    }
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
