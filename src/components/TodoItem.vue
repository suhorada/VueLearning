<template>
    <li class="align-center" v-bind:class="{['completed-task']: todo.completed}">
        <span class="text-span" v-bind:class="{['completed-task']: todo.completed}">
            <input type="checkbox" v-on:change="todo.completed = !todo.completed">
            Do: {{todo.text}}
        </span>
        <button class="remove-button" v-on:click="$emit('todoDelete', todo.id)">Delete</button>
    </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
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
