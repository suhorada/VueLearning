<template>
  <div>
    <ul>
      <ListItem
        v-for="list of allLists"
        v-bind:list="list"
        v-bind:key="list"
      />
    </ul>
  </div>
</template>

<script>
import ListItem from '@/components/lists/ListItem.vue'
import { mapGetters } from 'vuex'

export default {
  props: ['todos'],
  components: {
    ListItem
  },
  methods: {
  },
  computed: {
    ...mapGetters(['allLists'])
  },
  mounted () {
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  div {
    margin-top: 10px;
  }
</style>
