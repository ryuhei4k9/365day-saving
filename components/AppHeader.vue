<template>
  <div
    class="sticky top-0 z-40 bg-teal-500 w-full h-16 p-1 border-solid border-b-2 border-gray-600"
  >
    <div class="flex items-center justify-center">
      <div class="absolute right-0 text-gray-100 pr-2">
        <MenuIcon @click="toggleMenu()" />
      </div>
      <div class="flex flex-col">
        <span class="font-semibold text-xl tracking-wide text-gray-100 text-xl"
          >365日貯金</span
        >
        <total />
      </div>
    </div>
    <!-- menu -->

    <div
      :class="open ? 'navbar-open' : 'navbar-close'"
      class="navbar bg-gray-700 shadow w-64
       -mx-1 absolute overflow-x-scroll top-0 h-screen"
    >
      <div class="absolute top-0 right-0"><XIcon @click="toggleMenu()" /></div>
      <ul class="list-reset">
        <li class="block p-4 text-gray-100 font-bold" @click="resetStates()">
          リセット
        </li>
        <li class="block p-4 text-gray-600 font-bold">
          まとめて入力(WIP)
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
import Total from '~/components/Total'
import MenuIcon from '~/assets/svg/icon-menu.svg'
import XIcon from '~/assets/svg/icon-x.svg'

export default Vue.extend({
  components: {
    Total,
    MenuIcon,
    XIcon
  },

  data() {
    return {
      open: false
    }
  },

  methods: {
    toggleMenu() {
      this.open = !this.open
      console.log('click')
    },

    resetStates() {
      this.$store.commit('gridState/resetCells')
      this.$store.commit('headerState/resetTotal')
    },

    ...mapMutations(['resetTotal', 'resetCells'])
  }
})
</script>

<style>
.navbar {
  transition: all 330ms ease-out;
}

.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(-100%);
}

svg {
  fill: currentColor;
  width: 2.5rem;
  height: 2.5rem;
}
</style>
