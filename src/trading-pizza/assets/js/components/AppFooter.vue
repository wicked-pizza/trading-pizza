<template>
  <footer class="app-footer">
    <p>
      <small v-html="copy"/>
    </p>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      year: '2018'
    }
  },
  computed: {
    copy () {
      return `&copy; ${this.author} ${this.year}`
    },
    author () {
      return this.$store.getters.author
    }
  },
  created () {

  }
}
</script>