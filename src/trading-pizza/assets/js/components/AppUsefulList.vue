<template>
  <section class="app-useful-list">
    <header class="app-useful-list_header">
      <h2>有用なサイトへのショートカット</h2>
    </header>
    <ul class="app-useful-list_items">
      <template v-for="item in items">
        <li class="app-useful-list_item" v-if="show(item.fields.Enabled)">
          <my-item :data="item.fields"/>
        </li>
      </template>
    </ul>
  </section>
</template>

<script>
import MyItem from './AppUsefulItem.vue'

export default {
  computed: {
    items () {
      return this.$store.getters.table01
    }
  },
  methods: {
    show (enabled) {
      return Number(enabled) != 0
    }
  },
  components: {
    MyItem
  }
}
</script>