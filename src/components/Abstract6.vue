<template>
  <v-img
    src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/abstracts/abstract3.png"
    class="abstract-6 flip"
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

.abstract-6
  position: absolute !important
  left: 0
  top: -10%
  right: 0
  z-index: 0 !important
  opacity: .4

  ~ *
    z-index: 1 !important
</style>
