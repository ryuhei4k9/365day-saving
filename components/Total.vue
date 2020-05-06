<template>
  <div>
    <span class="text-gray-100">貯金総額：{{ headerState.total }}円</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['headerState'])
  }
}
</script>
