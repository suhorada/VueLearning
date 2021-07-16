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
    <button v-on:click="log">test</button>
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
    todoDelete (id) {
      this.$emit('todoDelete', id)
    },
    log () {
      this.$store.dispatch('addTodo', {todo: {id: 1, text: 228, completed: false}, listName: 'list1'})
      // console.log(this.allTodos)
    }
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
