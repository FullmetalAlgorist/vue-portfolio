<template>
  <v-img
    src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/abstracts/abstract22Low.png"
    class="abstract-2 flip"
    height="711"
    width="778"
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
.abstract-2
  position: absolute !important
  left: 0
  top: -128px
  z-index: -1 !important
  opacity: .4

  ~ *
    z-index: -1 !important
</style>
