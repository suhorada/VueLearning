<template>
  <div>
      <select name="List" id="list" @change="onChange($event)">
        <option
        v-for="list of allLists"
        v-bind:key="list"
        v-bind:list="list"
        >{{list}}
        </option>
      </select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {

    }
  },
  methods: {
    onChange (e) {
    }
  },
  computed: {
    ...mapGetters(['allLists'])
  },
  mounted () {
  }
}
</script>

<style scoped>
  select {
    height: 35px;
    width: 170px;
    font-size: 1.2rem;
  }
</style>
