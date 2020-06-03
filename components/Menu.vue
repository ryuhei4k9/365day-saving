<template>
  <div class="w-screen h-screen fixed top-0 left-0 z-40 backdrop-blur">
    <nav
      class="bg-teal-800 fixed top-0 right-0 w-3/4 h-screen z-50 filter-drop-shadow-teal"
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
      <ul class="mb-4">
        <li class="list-item border-t" @click="$emit('tapUpdateTitle')">
          <FlagIcon />
          <span class="leading-6">目標（タイトル）設定</span>
        </li>
        <li class="list-item" @click="$emit('tapUpdateLaunchDate')">
          <CalanderIcon />
          <span class="leading-6">貯金開始日変更</span>
        </li>
        <li class="list-item" @click="$emit('tapDeleteSetting')">
          <TrashIcon />
          <span class="leading-6">データ削除</span>
        </li>
      </ul>

      <div class="flex items-center justify-center h-16">
        <div>
          <span class="font-semibold text-lg tracking-widest text-gray-100"
            >貯金情報</span
          >
        </div>
      </div>
      <ul class="mb-4">
        <li class="list-item2 border-t">
          <div class="leading-6">貯金額</div>
          <div class="leading-6">{{ total }} / 66795</div>
        </li>
        <li class="list-item2">
          <div class="leading-6">埋めたマス</div>
          <div class="leading-6">{{ numberOfDoneCell }} / 365</div>
        </li>
        <li class="list-item2">
          <div class="leading-6">貯金開始日</div>
          <div class="leading-6">{{ date }}</div>
        </li>
        <li class="list-item2">
          <div class="leading-6">経過日数</div>
          <div class="leading-6">{{ passedDays }}日</div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import XIcon from '~/assets/svg/icon-x.svg'
import FlagIcon from '~/assets/svg/icon-flag.svg'
import CalanderIcon from '~/assets/svg/icon-calander.svg'
import TrashIcon from '~/assets/svg/icon-trash.svg'

export default {
  components: {
    XIcon,
    FlagIcon,
    CalanderIcon,
    TrashIcon
  },

  data() {
    return {
      isEditing: false
    }
  },

  computed: {
    total() {
      return this.$store.state.headerState.total
    },

    date() {
      return this.$dayjs(this.$store.state.settingState.launchDate).format(
        'YYYY年MM月DD日'
      )
    },

    passedDays() {
      return this.$dayjs().diff(
        this.$store.state.settingState.launchDate,
        'day'
      )
    },

    numberOfDoneCell() {
      return this.$store.getters['gridState/numberOfDoneCell']
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

li > svg {
  fill: currentColor;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.75rem;
}

.list-item {
  @apply flex items-center justify-start h-12 pl-4 pr-2 bg-gray-100 border-b border-teal-800 text-teal-800 text-base;
}

.list-item2 {
  @apply flex items-center justify-between h-12 px-2 bg-teal-600 border-b border-teal-800 text-gray-100 text-sm;
}
</style>
