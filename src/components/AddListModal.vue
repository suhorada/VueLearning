<template>
  <transition name="modal-fade">
    <form @submit.prevent="onSubmit">
      <div class="modal-backdrop">
        <div class="modal">
          <header class="modal-header">
            <slot name="header">
              Add new list:
            </slot>
          </header>
          <section class="modal-body">
            <slot name="body">
              Type the list name:
              <input name="text" class="input-list" type="text" v-model="text">
            </slot>
          </section>
          <footer class="modal-footer">
              <slot name="footer">
                <button
                  type="button"
                  class="btn-red"
                  @click="close"
                >
                  Close
              </button>
              <button
                  type="submit"
                  class="btn-green"
                  @click="close"
                >
                  Add
              </button>
            </slot>
          </footer>
        </div>
      </div>
    </form>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {text: ''}
  },
  methods: {
    close () {
      this.$emit('close')
    },
    onSubmit () {
      if (this.text.trim()) {
        this.addList(this.text.trim())
        this.text = ''
      }
    },
    addList (name) {
      this.$store.dispatch('addList', name)
    }
  },
  mounted () {
    this.$store.dispatch('getListsFromLS')
  }
}
</script>

<style>
  .input-list {
    height: 35px;
    width: 170px;
    font-size: 1.2rem;
    border-radius: 7px;
  }

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }

  .modal-backdrop {
    position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    /* position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%); */
    width: 30vw;
    height: 30vh;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    align-items: center;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
    font-size: 1.5rem;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: space-around;
  }

  .modal-body {
    font-size: 1.2rem;
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    font-size: 1.2rem;
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .btn-red {
    font-size: 1.2rem;
    color: white;
    background: #a82c2c;
    border: 1px solid #b62c2c;
    border-radius: 2px;
  }
</style>
