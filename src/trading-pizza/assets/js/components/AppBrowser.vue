<template>
  <div class="app-browser" v-if="show">
    <div class="app-browser_overlay"/>
    <div class="app-browser_inner">
      <header class="app-browser_header">
        <h1 class="app-browser_title">
          <span v-text="title"/>
        </h1>
        <a class="app-browser_link" :href="url" target="_blank">
          <i class="a-icon fas fa-external-link-alt"/>
        </a>
      </header>
      <div class="app-browser_window">
        <iframe :src="url"/>
      </div>
      <div class="app-browser_close">
        <button @click="close">
          <span>
            <i class="a-icon fas fa-times"/>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    show () {
      return this.$store.getters.isBrowserShow
    },
    url () {
      return this.$store.getters.browserUrl
    },
    title () {
      return this.$store.getters.browserTitle
    }
  },
  methods: {
    close () {
      this.$store.dispatch('SET_BROWSER_SHOW', {
        show: false,
        tilte: null,
        url: null
      })
    }
  }
}
</script>