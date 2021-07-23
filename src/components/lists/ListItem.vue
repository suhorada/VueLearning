<template>
  <li class="align-center" v-on:dblclick="editList, edit=!edit, focusInput()">
    <span class="text-span">
        <div>
          <label @click="setList" class="list-label" v-if="!edit">
            <router-link class="link" to="/todos">
              {{list}}
            </router-link>
          </label>
        </div>
        <input class="list-input" v-on:keyup.enter="blurInput()" :value="list" ref="editInput" v-if="edit" v-on:blur="edit=!edit, editList('text')" type="text">
    </span>
    <button class="remove-button" v-on:click="deleteList">Delete</button>
  </li>
</template>

<script>
import { setLS } from '../../localStorage'

export default {
  data () { return { edit: false } },
  props: {
    list: {
      type: String,
      required: true
    }
  },

  methods: {
    deleteList () { this.$store.dispatch('deleteList', this.list) },
    setList () { setLS('currentList', this.list) },
    editList () {
      if (this.$refs.editInput.value.trim()) {
        const newList = this.$refs.editInput.value.trim()
        this.$store.dispatch('editList', {lastList: this.list, newList})
      }
    },

    focusInput () {
      const self = this
      setTimeout(function () {
        if (self.$refs) {
          self.$refs.editInput.focus()
        }
      }, 1)
    },

    blurInput () {
      const self = this
      setTimeout(function () {
        if (self.$refs) {
          self.$refs.editInput.blur()
        }
      }, 1)
    }
  }
}
</script>

<style scoped>
  .link {
    font-size: 1.2rem;
    text-decoration-line: none;
  }

  .link:visited {
    color: black;
  }

  .link:hover {
    cursor: pointer;
    text-decoration-line: initial;
    color: rgb(45, 86, 163);
  }

  .text-span {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    width: 70%;
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

  .list-label {
    white-space: pre-wrap;
    word-break: break-all;
  }

  .list-input {
    width: 100%;
    border-radius: 7px;
    height: 25px;
    font-size: 1.2rem;
  }

  .label-span {
    width: 500px;
  }
</style>
