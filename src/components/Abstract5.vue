<template>
  <v-img
    src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/abstracts/abstract44Low.png"
    class="abstract-5 flip"
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
    
.abstract-5
  position: absolute !important
  left: 0
  right: 0
  
  z-index: 0 !important
  opacity: .3

  ~ *
     z-index: 1 !important

   
</style>
