<template>
  <div class="app-contents">
    <app-useful-list/>
    <app-online-lesson/>
  </div>
</template>

<script>
import AppUsefulList from './AppUsefulList.vue'
import AppOnlineLesson from './appOnlineLesson.vue'

export default {
  components: {
    AppUsefulList,
    AppOnlineLesson
  }
}
</script>