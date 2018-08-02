<template>
  <a :href="data.URL" @click.prevent="open(data.URL)" target="_brank">
    <dl class="app-useful-item">
      <dt class="app-useful-item_name" v-text="data.Name"/>
      <dd class="app-useful-item_about" v-if="showAbout(data.About)">
        <blockquote v-text="data.About"/>
      </dd>
      <dd class="app-useful-item_category">
        <small v-text="data.Category"/>
      </dd>
    </dl>
  </a>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    open () {
      this.$store.dispatch('SET_BROWSER_SHOW', {
        show: true,
        title: this.data.Name,
        url: this.data.URL
       })
    },
    showAbout (s) {
      return (s != null && s !== '')
    }
  }
}
</script>