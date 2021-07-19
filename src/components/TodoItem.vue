<template>
    <li class="align-center" v-on:dblclick="editTodo, edit=!edit, focusInput()" v-bind:class="{['completed-task']: todo.completed}">
        <span class="text-span" v-bind:class="{['completed-task']: todo.completed}">
            <input :checked="todo.completed" type="checkbox" v-on:change="todo.completed = !todo.completed, editTodo('check')">
            <label v-if="!edit">{{todo.text}}</label>
            <input :value="todo.text" ref="editInput" v-if="edit" v-on:blur="edit=!edit, editTodo('text')" type="text">
        </span>
        <button class="remove-button" v-on:click="deleteTodo">Delete</button>
    </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo () {
      this.$store.dispatch('deleteTodo', this.todo.id)
    },
    editTodo (where) {
      if (where === 'text') {
        const newTodo = {...this.todo, text: this.$refs.editInput.value}
        this.$store.dispatch('editTodo', newTodo)
      } else if (where === 'check') {
        const newTodo = {...this.todo}
        this.$store.dispatch('editTodo', newTodo)
      }
    },
    focusInput () {
      const self = this
      setTimeout(function () {
        console.log(self.$refs)
        if (self.$refs) {
          self.$refs.editInput.focus()
        }
      }, 1)
    }
  },
  data: function () {
    return {
      edit: false
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
    .text-span {
        font-size: 1.2rem;
    }

    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem .2rem;
        margin-bottom: 1rem;
        border-radius: 7px;
    }

    .remove-button {
        background-color: rgba(255, 0, 0, 0.479);
        color: #fff;
        border: 0px;
        border-radius: 7px;
        margin-right: 1rem;
        transition: 0.3s;
        font-size: 1.2rem;
        height: 35px;
        width: 110px;
    }
    .remove-button:hover {
        background-color:red;
        transform:scale(1.051,1.051);
        -webkit-transform:scale(1.051,1.051);
        -moz-transform:scale(1.051,1.051);
        transition: 0.3s;
    }

    span.completed-task {
        text-decoration: line-through;
    }

    li.completed-task {
        background-color: rgba(0, 179, 0, 0.075);
    }

    input {
        margin-right: 1rem;
    }

    .align-center {
        display: flex;
        align-items: center;
    }
</style>
