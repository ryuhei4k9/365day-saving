<template>
  <div
    class="flex justify-center items-center fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur"
  >
    <div
      class="bg-gray-100 w-3/4 py-1 px-2 filter-drop-shadow-teal rounded text-gray-800"
    >
      <div class="relative flex justify-center items-cemter py-2">
        <div class="absolute right-0">
          <XIcon @click="$emit('tapCloseDeleteSetting')" />
        </div>
        <div class="font-semibold leading-8">
          データ削除
        </div>
      </div>
      <p class="text-sm tracking-tight">
        埋めたマス・目標（タイトル）・貯金開始日を初期化します。<br />この操作は実行すると復元できません。<br />よろしいですか？
      </p>
      <div class="flex justify-center py-2">
        <button
          class="bg-gray-100 border-teal-500 text-sm border border-teal-500 text-teal-500 py-1 px-4 mx-4 rounded"
          type="button"
          @click="$emit('tapCloseDeleteSetting')"
        >
          中止
        </button>
        <button
          class="bg-teal-500 border-teal-500 text-sm border text-white py-1 px-4 mx-4 rounded"
          type="button"
          @click="resetStates"
        >
          削除
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import XIcon from '~/assets/svg/icon-x.svg'

export default {
  components: {
    XIcon
  },

  methods: {
    resetStates() {
      this.$store.commit('gridState/resetCells')
      this.$store.commit('headerState/resetTotal')
      this.$store.commit('settingState/resetSettings', {
        date: this.$dayjs().format('YYYY/MM/DD')
      })
      this.$emit('tapCloseModal')
    }
  }
}
</script>

<style>
svg {
  fill: currentColor;
  width: 2rem;
  height: 2rem;
}
</style>
