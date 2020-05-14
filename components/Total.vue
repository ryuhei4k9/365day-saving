<template>
  <span class="text-gray-100">貯金総額：{{ headerState.total }}円</span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['headerState'])
  }
}
</script>
