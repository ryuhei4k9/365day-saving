<template>
  <div
    :class="{ 'bg-yellow-300': isDone }"
    class="relative flex justify-center items-center aspect-ratio-for-cell border-gray-600 border-solid border-b-2 border-r-2"
    @click="doneToggle"
  >
    <span
      class="absolute top-for-cell w-full h-0 text-2xl text-gray-500 select-none"
      >{{ number }}</span
    >
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['number'],
  data() {
    return {
      isDone: false
    }
  },

  methods: {
    doneToggle() {
      this.isDone = !this.isDone
      this.isDone
        ? this.$store.commit('headerState/addTotal', { amount: this.number })
        : this.$store.commit('headerState/subtractTotal', {
            amount: this.number
          })
    },

    ...mapMutations(['add', 'subtract'])
  }
}
</script>

<style></style>
