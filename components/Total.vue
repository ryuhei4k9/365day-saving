<template>
  <div>
    <span class="text-gray-100">貯金総額：{{ total }}円</span>
  </div>
</template>

<script>
export default {
  computed: {
    total() {
      return this.$store.state.headerState.total
    }
  }
}
</script>
