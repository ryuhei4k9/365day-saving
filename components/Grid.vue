<template>
  <div
    class="z-0 w-full grid grid-cols-6 gap-0 border-gray-600 border-l-2 overflow-x-hidden pb-8-safe"
  >
    <cell v-for="cell in gridState.cells" :key="cell.number" :cell="cell" />
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import Cell from '~/components/Cell.vue'

export default Vue.extend({
  components: {
    Cell
  },

  computed: {
    ...mapState(['gridState'])
  }
})
</script>

<style></style>
