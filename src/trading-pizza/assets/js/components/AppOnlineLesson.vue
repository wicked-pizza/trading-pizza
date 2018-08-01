<template>
  <section class="app-online-lesson">
    <header class="app-online-lesson_header">
      <h2>
        オンラインでの学習
      </h2>
    </header>

    <ul class="app-online-lesson_items">
      <template v-for="item in items">
        <li class="app-online-lesson_item">
          <a :href="item.fields.URL" target="_blank">
            <dl>
              <dt v-text="item.fields.Name"/>
              <dd>
                <small v-text="typeText(item.fields.Type)"/>
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
      return this.$store.getters.table02
    }
  },
  methods: {
    typeText (t) {
      switch (t) {
        case 'website':
          return 'ウェブサイト'
        case 'page':
          return 'ページ'
        case 'pdf':
          return 'PDF'
        default:
          return ''
      }
    }
  }
}
</script>