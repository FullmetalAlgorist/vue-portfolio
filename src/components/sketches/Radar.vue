<template>
  <v-layout class="sketchMe  pt-2" align-center justify-center wrap fill-height >
    <info-panel :sketchMe="0" v-model="dialog"></info-panel>
    <v-flex justify-space-between xs4>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon color="black" x-large @click="dialog = true" fab v-on="on" class="aboutME">mdi-information</v-icon>
        </template>
        <span>About this sketch</span>
      </v-tooltip>
      <!-- <h3>{{ daeth }}</h3> -->
    </v-flex>

    <v-flex justify-space-between xs4>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn fab style="font-size: 220%" outline color="white" large @click="flip" v-on="on">GO</v-btn>
        </template>
        <span>Try new formula!</span>
      </v-tooltip>
    </v-flex>
    <v-flex justify-space-between xs4>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn small fab @click="up" v-on="on">
            <v-icon large>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Add a vertex</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn small fab @click="down" v-on="on">
            <v-icon large>mdi-minus</v-icon>
          </v-btn>
        </template>
        <span>Subtract a vertex</span>
      </v-tooltip>
      
    </v-flex>
    <v-flex class="top" xs12 pt-4>
      <div class="canvas" id="p5Canvas"></div>
    </v-flex>
  </v-layout>
</template>

<script>
  // import {
  //   mapState
  // } from 'vuex'
if (process.browser) {
  var radar = require("@/Radar.js");
}
export default {
  data() {
    return {
      dialog: false,
    };
  },
  components: {
    infoPanel: () => import("@/components/sketches/infoPanel")
  },
  mounted() {
    const P5 = require("p5");
    new P5(radar.main);
  },
  methods: {
    flip() {
      radar.flip();
    },
    up() {
      radar.up();
    },
    down() {
      radar.down();
    }
  },
  // computed:{
  //   daeth(){
  //     //console.log(this.$store.app.state.killSketches);
  //     return this.$store.state.app.killSketches;
  //   },
    // ...mapState('app', ['killSketches']),
  // }
};
</script>
<style lang="scss">
//global variables for sketches
.sketchMe {
  // background-color: black !important;
  margin: 60px 0;
  border-radius: 2%;
}
.v-dialog {
  opacity: 0.7;
}
.p5Canvas{
  border-radius:1% !important;
}
</style>
