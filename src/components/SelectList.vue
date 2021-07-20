<template>
  <div class="select-block">
    <button @click="showModal()" class="add-list" type="submit">Add List</button>
    <select v-if="this.$route.path==='/todos'" name="List" id="list" @change="onChange($event)">
      <option v-if="currentList==='All'" :value="null" selected>Select List</option>
      <option
      v-for="list of allLists"
      v-bind:key="list"
      v-bind:list="list"
      >{{list}}
      </option>
    </select>
    <AddListModal
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import AddListModal from '@/components/AddListModal.vue'

export default {
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    onChange (e) {
      this.$store.dispatch('selectList', e.target.value)
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }
  },
  computed: {
    ...mapGetters(['allLists', 'currentList'])
  },
  mounted () {
  },
  components: {
    AddListModal
  }
}
</script>

<style scoped>
  select {
    height: 35px;
    width: 170px;
    font-size: 1.2rem;
    border-radius: 7px;
    margin-left: 7px;
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
    margin-bottom: 10px;
  }

  .select-block {
    display: flex;
    /* width: 255px; */
    justify-content: space-between;
    align-items: center;
  }
</style>
