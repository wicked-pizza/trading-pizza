<template>
  <div class="app-row" :data-name="name">
    <slot/>
  </div>
</template>

<script>
export default {
  props: ['name'],
}
</script>