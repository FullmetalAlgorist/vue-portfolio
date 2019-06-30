<template>
  <v-layout
    tag="section"
    pa-4
    v-bind="$attrs"
    wrap
    style="position: relative;"
  >
    <slot />
  </v-layout>
</template>

<script>
  export default {
    inheritAttrs: false
  }
</script>
