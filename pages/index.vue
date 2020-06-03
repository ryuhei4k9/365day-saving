<template>
  <div class="container">
    <div class="w-full">
      <AppHeader @tapMenuIcon="openMenu" />
      <Grid />
    </div>
    <transition name="slide-fade">
      <Menu
        v-if="isShownMenu"
        @tapCloseIcon="closeMenu"
        @tapDeleteSetting="openDeleteSettingModal"
        @tapUpdateTitle="openUpdateTitleModal"
        @tapUpdateLaunchDate="openUpdateLaunchDateModal"
      />
    </transition>

    <DeleteSetting
      v-if="isShownDeleteSetting"
      @tapCloseDeleteSetting="closeDeleteSettingModal"
    />
    <UpdateTitle
      v-if="isShownUpdateTitle"
      @tapCloseUpdateTitle="closeUpdateTitleModal"
    />
    <UpdateLaunchDate
      v-if="isShownUpdateLaunchDate"
      @tapCloseUpdateLaunchDate="closeUpdateLaunchDateModal"
    />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import Grid from '~/components/Grid.vue'
import Menu from '~/components/Menu.vue'
import DeleteSetting from '~/components/modal/DeleteSetting.vue'
import UpdateTitle from '~/components/modal/UpdateTitle.vue'
import UpdateLaunchDate from '~/components/modal/UpdateLaunchDate.vue'

export default {
  components: {
    AppHeader,
    Grid,
    Menu,
    DeleteSetting,
    UpdateTitle,
    UpdateLaunchDate
  },

  data() {
    return {
      isShownMenu: false,
      isShownDeleteSetting: false,
      isShownUpdateTitle: false,
      isShownUpdateLaunchDate: false
    }
  },

  mounted() {
    setTimeout(() => {
      this.$store.commit('settingState/initialize', {
        date: this.$dayjs().format('YYYY/MM/DD')
      })
    }, 0)
  },

  methods: {
    openMenu() {
      this.isShownMenu = true
    },

    closeMenu() {
      this.isShownMenu = false
    },

    openDeleteSettingModal() {
      this.isShownDeleteSetting = true
    },

    closeDeleteSettingModal() {
      this.isShownDeleteSetting = false
    },

    openUpdateTitleModal() {
      this.isShownUpdateTitle = true
    },

    closeUpdateTitleModal() {
      this.isShownUpdateTitle = false
    },

    openUpdateLaunchDateModal() {
      this.isShownUpdateLaunchDate = true
    },

    closeUpdateLaunchDateModal() {
      this.isShownUpdateLaunchDate = false
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(40px);
  opacity: 0;
}
</style>
