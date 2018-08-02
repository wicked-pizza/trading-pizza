<template>
  <div class="app-container">
    <app-header/>
    <app-contents/>
    <app-footer/>
    <app-browser/>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import AppContents from './AppContents.vue'
import AppBrowser from './AppBrowser.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppContents,
    AppBrowser
  }
}
</script>