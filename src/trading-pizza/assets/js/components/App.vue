<template>
  <div class="app-container">
    <app-header/>
    <app-contents/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import AppContents from './AppContents.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppContents
  }
}
</script>