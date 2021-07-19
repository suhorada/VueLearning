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
      console.log(e.target.value)
    }
  },
  computed: {
    ...mapGetters(['allLists'])
  },
  mounted () {
    console.log(this.allLists)
  }
}
</script>

<style scoped>

</style>
