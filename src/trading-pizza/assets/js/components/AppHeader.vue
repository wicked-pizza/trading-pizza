<template>
  <header class="app-header">
    <h1 class="app-logo">
      <span data-wf="Paytone One" v-text="name"/>
    </h1>
  </header>
</template>

<script>
export default {
  computed: {
    name () {
      return this.$store.getters.name
    }
  }
}
</script>