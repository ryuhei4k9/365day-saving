<template>
  <div
    class="flex justify-center items-center fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur"
  >
    <div
      class="bg-gray-100 w-3/4 py-1 px-2 filter-drop-shadow-teal rounded text-gray-800"
    >
      <div class="relative flex justify-center items-cemter py-2">
        <div class="absolute right-0">
          <XIcon @click="$emit('tapCloseUpdateLaunchDate')" />
        </div>
        <div class="font-semibold leading-8">
          貯金開始日変更
        </div>
      </div>
      <input
        v-model="launchDate"
        class="appearance-none bg-transparent border-b border-b-2 border-teal-500 w-11/12 px-2 py-1 text-gray-700 leading-tight focus:outline-none"
        type="date"
      />
      <div class="flex justify-center py-2">
        <button
          class="bg-teal-500 border-teal-500 text-sm border text-white py-1 px-4 mx-4 rounded"
          type="button"
          @click="$emit('tapCloseUpdateLaunchDate')"
        >
          更新
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

  computed: {
    launchDate: {
      get() {
        return this.$dayjs(this.$store.state.settingState.launchDate).format(
          'YYYY-MM-DD'
        )
      },
      set(value) {
        this.$store.commit('settingState/updateLaunchDate', {
          afterDate: this.$dayjs(value).format('YYYY-MM-DD')
        })
      }
    }
  }
}
</script>

<style scoped>
svg {
  fill: currentColor;
  width: 2rem;
  height: 2rem;
}
</style>
