<template>
  <div class="w-screen h-screen fixed top-0 left-0 z-40 backdrop-blur">
    <nav
      class="bg-teal-800 fixed top-0 right-0 w-2/3 h-screen z-50 filter-drop-shadow-teal"
    >
      <div class="flex items-center justify-center h-16">
        <div class="absolute right-0 text-gray-100 pr-3">
          <XIcon @click="$emit('tapCloseIcon')" />
        </div>
        <div>
          <span class="font-semibold text-lg tracking-widest text-gray-100"
            >設定</span
          >
        </div>
      </div>
      <ul>
        <li class="list-item border-t">
          <FlagIcon />
          <span class="leading-6">目標（タイトル）設定</span>
        </li>
        <li class="list-item" @click="resetStates">
          <TrashIcon />
          <span class="leading-6">データ削除</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import XIcon from '~/assets/svg/icon-x.svg'
import FlagIcon from '~/assets/svg/icon-flag.svg'
import TrashIcon from '~/assets/svg/icon-trash.svg'

export default {
  components: {
    XIcon,
    FlagIcon,
    TrashIcon
  },

  methods: {
    resetStates() {
      this.$store.commit('gridState/resetCells')
      this.$store.commit('headerState/resetTotal')
    },

    ...mapMutations(['resetTotal', 'resetCells'])
  }
}
</script>

<style scoped>
svg {
  fill: currentColor;
  width: 2rem;
  height: 2rem;
}

li > svg {
  fill: currentColor;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.75rem;
}

.list-item {
  @apply flex pl-4 items-center justify-start bg-teal-600 h-12 border-b border-gray-300 text-gray-100 text-base;
}
</style>
