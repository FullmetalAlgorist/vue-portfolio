<template>
  <div class="wrapper">
    <v-container class="sketches">
      <radar-component/>
      <next-component/>
      <tree-component/>
      <lines-component/>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    radarComponent: () => import("@/components/sketches/Radar"),
    nextComponent: () => import("@/components/sketches/Next"),
    treeComponent: () => import("@/components/sketches/Tree"),
    linesComponent: () => import("@/components/sketches/Lines")
  }
  // methods: {
  //   callbackOnP5: function(timeStr) {
  //     this.message = timeStr;
};
</script>
<style lang= "scss" scoped>
.sketchMe {
  background-color: black !important;
  margin: 60px 0;
  border-radius: 2%;
}
.wrapper {
  /* background-image: url('~@/assets/trianglifyLarge2.png'); */
  background:url("https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/frontPage/trianglifyLarge2.png");
  background-repeat: repeat-y;
  display: cover;
}

.sketches {
  max-width: 650px;
}
</style>

