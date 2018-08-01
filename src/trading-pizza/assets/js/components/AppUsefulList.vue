<template>
  <section class="app-useful-list">
    <header class="app-useful-list_header">
      <h2>有用なサイトへのショートカット</h2>
    </header>
    <ul class="app-useful-list_items">
      <template v-for="item in items">
        <li class="app-useful-list_item" v-if="show(item.fields.Enabled)">
          <a :href="item.fields.URL" target="_blank">
            <dl class="app-useful-item">
              <dt class="app-useful-item_name" v-text="item.fields.Name"/>
              <dd class="app-useful-item_about" v-if="showAbout(item.fields.About)">
                <blockquote v-text="item.fields.About"/>
              </dd>
              <dd class="app-useful-item_category">
                <small v-text="item.fields.Category"/>
              </dd>
            </dl>
          </a>
        </li>
      </template>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    items () {
      return this.$store.getters.table01
    }
  },
  methods: {
    show (enabled) {
      return Number(enabled) != 0
    },

    showAbout (s) {
      return (s != null && s !== '')
    }
  }
}
</script>