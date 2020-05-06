<template>
  <div
    :class="{ 'bg-yellow-300': cell.isDone }"
    class="relative flex justify-center items-center aspect-ratio-for-cell border-gray-600 border-solid border-b-2 border-r-2"
    @click="doneToggle"
  >
    <span
      class="absolute top-for-cell w-full h-0 text-2xl text-gray-500 select-none"
      >{{ cell.number }}</span
    >
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['cell'],

  methods: {
    doneToggle() {
      this.$store.commit('gridState/toggleDone', {
        cellNumber: this.cell.number
      })
      this.cell.isDone
        ? this.$store.commit('headerState/addTotal', {
            amount: this.cell.number
          })
        : this.$store.commit('headerState/subtractTotal', {
            amount: this.cell.number
          })
    },

    ...mapMutations(['add', 'subtract', 'toggleDone'])
  }
}
</script>

<style></style>
