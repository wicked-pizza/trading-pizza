<template>
  <div class="app-contents">
    <app-row name="01">
      <app-intro/>
      <app-useful-list/>
    </app-row>
    <app-online-lesson/>
  </div>
</template>

<script>
import AppRow from './AppRow.vue'
import AppIntro from './AppIntro.vue'
import AppUsefulList from './AppUsefulList.vue'
import AppOnlineLesson from './appOnlineLesson.vue'

export default {
  components: {
    AppRow,
    AppIntro,
    AppUsefulList,
    AppOnlineLesson
  }
}
</script>