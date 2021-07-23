<template>
  <div>
    <input type="text" name="text" v-model="text" @input="search()" @onChange="search()"/>
  </div>
</template>

<script>
export default {
  data() {
    return { text: '' }
  },
  methods: {
    search() {
      this.$store.dispatch('setTodosSearch', this.text)
    }
  },
  mounted() { this.$store.dispatch('setTodosSearch', '') }
}
</script>

<style scoped>
input {
  border-radius: 7px;
  height: 35px;
  font-size: 1.2rem;
}
</style>
