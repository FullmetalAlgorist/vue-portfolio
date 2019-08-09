<template>
<!-- <div class="wrapper fuckingCenter"> -->
    <!-- <v-container class="ugh justify-center text-xs-center align-center align-content-center"> -->
      <v-layout class="sketches">
        <v-flex align-self-center xs12 >
          <v-flex v-if="s>0">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-icon
                  @click="s--"
                  class="bigArrowLeft"
                  large
                  color="black"
                  v-on="on"
                >mdi-chevron-left</v-icon>
              </template>
              <span>Last sketch</span>
            </v-tooltip>
          </v-flex>
          <v-flex text-xs-center px-4  class="bb">
          <component :is="sketchArray[s].component"></component>
      </v-flex>
          <v-flex v-if="s<3">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-icon
                  @click="s++"
                  class="bigArrowRight"
                  large
                  color="black"
                  v-on="on"
                >mdi-chevron-right</v-icon>
              </template>
              <span>Next sketch</span>
            </v-tooltip>
          </v-flex>
        </v-flex>
        <!-- <next-component/>
      <tree-component/>
        <lines-component/>-->
      </v-layout>
    <!-- </v-container> -->
<!-- </div> -->
</template>

<script>
// nextComponent: () => import("@/components/sketches/Next"),
// treeComponent: () => import("@/components/sketches/Tree"),
// linesComponent: () => import("@/components/sketches/Lines")
import radarComponent from "@/components/sketches/Radar.vue";
import nextComponent from "@/components/sketches/Next";
import treeComponent from "@/components/sketches/Tree";
import linesComponent from "@/components/sketches/Lines";
export default {
  components: {
    radarComponent,
    nextComponent,
    treeComponent,
    linesComponent
  },
  data() {
    return {
      s: 0,
      sketchArray: [
        { title: "radar", component: radarComponent },
        { title: "next", component: nextComponent },
        { title: "tree", component: treeComponent },
        { title: "lines", component: linesComponent }
      ]
    };
  }

  // methods: {
  //   callbackOnP5: function(timeStr) {
  //     this.message = timeStr;
};
</script>
<style lang= "scss" scoped>

.sketches {
  
   height: 100vh;
   width: 100%;
   /* display: cover; */
  background-position: center;
   margin: 0;
   /* background-repeat: round; */
  background-image: url("https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/frontPage/trianglifyLarge.png");
  /* max-width: 650px; */
}
.bigArrowRight {
  font-size: 450% !important;
  position: absolute;
  left: 62vw;
  top: 1vh;
}
.bigArrowLeft {
  font-size: 450% !important;
  position: absolute;
  left: 32vw;
  top: 1vh;
}
.ugh{
  
  padding: 0;
}
</style>

