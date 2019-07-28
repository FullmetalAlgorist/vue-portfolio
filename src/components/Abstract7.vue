<template>
  <v-img
    src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/abstracts/abstract1.png"
    class="abstract-7 flip"
    height="50%"
    width="100%"
  />
</template>

<style lang="sass">
.flip
    -moz-transform: scaleX(-1)
    -o-transform: scaleX(-1)
    -webkit-transform: scaleX(-1)
    transform: scaleX(-1)
    filter: FlipH
    -ms-filter: "FlipH"

.abstract-7
  position: absolute !important
  left: 0
  top: 55%
  opacity: .5
  z-index: 0 !important

  ~ *
    z-index: 1 !important
</style>
