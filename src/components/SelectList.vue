<template>
  <div class="select-block">
    <button @click="addList()" class="add-list" type="submit">Add List</button>
      <select name="List" id="list" @change="onChange($event)">
        <option v-if="currentList==='All'" :value="null" selected>Select List</option>
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
      this.$store.dispatch('selectList', e.target.value)
    }
  },
  computed: {
    ...mapGetters(['allLists', 'currentList'])
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
    border-radius: 7px;
  }

  .add-list {
    background-color: rgba(0, 0, 0, 0.45);
    color: #fff;
    border: 0px;
    border-radius: 7px;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    font-size: 1.2rem;
    height: 35px;
  }

  .select-block {
    display: flex;
    width: 255px;
    justify-content: space-between;
    align-items: center;
  }
</style>
