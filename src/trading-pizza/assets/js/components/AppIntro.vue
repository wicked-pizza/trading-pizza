<template>
  <div class="app-intro">
    <h2 class="app-intro_lead">
      <span v-text="lead"/>
    </h2>
    <div class="app-intro_desc">
      <p v-text="desc"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lead: 'トレードに役立つ情報を集めています。',
      desc: '情報は扱いやすいく整理されているべきですよね 😉'
    }
  }
}
</script>