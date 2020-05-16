<template>
  <div
    class="sticky top-0 z-40 bg-teal-600 w-full h-16 p-1 border-solid border-b-2 border-gray-600"
  >
    <div class="flex items-center justify-center">
      <div class="absolute right-0 text-gray-100 pr-3">
        <SettingIcon @click="$emit('tapMenuIcon')" />
      </div>
      <div class="flex flex-col">
        <span
          class="font-semibold text-xl tracking-wider text-gray-100 text-xl"
          >{{ title }}</span
        >
        <total />
      </div>
    </div>
  </div>
</template>

<script>
import Total from '~/components/Total'
import SettingIcon from '~/assets/svg/icon-cog.svg'

export default {
  components: {
    Total,
    SettingIcon
  },

  computed: {
    title() {
      return this.$store.state.settingState.title
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
