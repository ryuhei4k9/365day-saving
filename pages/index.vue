<template>
  <div class="container">
    <div class="w-full">
      <AppHeader @tapMenuIcon="openMenu" />
      <Grid />
    </div>
    <transition name="slide-fade">
      <Menu
        v-if="isOpenedMenu"
        @tapCloseIcon="closeMenu"
        @tapDeleteSetting="openDeleteSettingModal"
        @tapUpdateTitle="openUpdateTitleModal"
      />
    </transition>

    <DeleteModal
      v-if="isShownDeleteSetting"
      @tapCloseDeleteSetting="closeDeleteSettingModal"
    />
    <UpdateTitle
      v-if="isShownUpdateTitle"
      @tapCloseUpdateTitle="closeUpdateTitleModal"
    />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import Grid from '~/components/Grid.vue'
import Menu from '~/components/Menu.vue'
import DeleteModal from '~/components/DeleteModal.vue'
import UpdateTitle from '~/components/UpdateTitle.vue'

export default {
  components: {
    AppHeader,
    Grid,
    Menu,
    DeleteModal,
    UpdateTitle
  },

  data() {
    return {
      isOpenedMenu: false,
      isShownDeleteSetting: false,
      isShownUpdateTitle: false
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
      this.isOpenedMenu = true
    },

    closeMenu() {
      this.isOpenedMenu = false
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

svg {
  fill: currentColor;
  width: 2rem;
  height: 2rem;
}
</style>
