<template>
  <div>
    <h2>Todo list component</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/todos">Todos</router-link>
    <router-link to="/lists">Lists</router-link>
    <hr>
    <div class="add-bar">
      <SelectList/>
    </div>
    <Lists v-if="allLists.length"/>
    <p v-else>No lists</p>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue'
import SelectList from '@/components/SelectList.vue'
import Lists from '@/components/Lists.vue'
import { mapGetters } from 'vuex'
import { getLS } from '../localStorage'
export default {
  name: 'App',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters(['allLists'])
  },
  components: {
    Loader, SelectList, Lists
  },
  methods: {
    load () {
      if (getLS('lists')) {
        this.$store.dispatch('getListsFromLS')
      }
      this.loading = false
    }
  },
  mounted () {
    this.load()
  }
}
</script>

<style scoped>
  .add-bar {
    position: relative;
    display: flex;
    width: 600px;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>
