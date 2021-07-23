<template>
    <form @submit.prevent="onSubmit">
        <input type="text" name="text" id="todo-input" v-model="text">
        <button class="add-button" type="submit">Add todo</button>
    </form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () { return {text: ''} },
  computed: { ...mapGetters(['currentList']) },
  methods: {
    addTodo (todo) { this.$store.dispatch('addTodo', todo) },
    onSubmit () {
      if (this.text.trim()) {
        const newTodo = {id: Date.now(), text: this.text, completed: false, listName: this.currentList}
        this.addTodo(newTodo)
        this.text = ''
      }
    }
  }
}
</script>

<style scoped>
  .add-button {
      background-color: rgba(16, 81, 45, 0.450);
      color: #fff;
      border: 0px;
      border-radius: 7px;
      margin-right: 1rem;
      transition: 0.6s;
      font-size: 1.2rem;
      height: 35px;
  }

  .add-button:hover {
      background-color: rgba(17, 139, 72, 0.507);
      transform:scale(1.051,1.051);
      -webkit-transform:scale(1.051,1.051);
      -moz-transform:scale(1.051,1.051);
      transition: 0.4s;
  }

  input {
      border-radius: 7px;
      height: 35px;
      font-size: 1.2rem;
  }
</style>
