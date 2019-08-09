<template>
  <v-layout class="sketchMe elevation-24 pt-2" align-center justify-center wrap fill-height>
    <info-panel :sketchMe="0" v-model="dialog"></info-panel>
    <v-flex justify-space-between xs4>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn @click="dialog = true" small color="black" fab v-on="on">
            <v-icon medium class="aboutME">mdi-information</v-icon>
          </v-btn>
        </template>
        <span>About this sketch</span>
      </v-tooltip>
    </v-flex>

    <v-flex justify-space-between xs4>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn style="font-size: 139%" outline color="black" large @click="flip" v-on="on">flip</v-btn>
        </template>
        <span>Try new formula!</span>
      </v-tooltip>
    </v-flex>
    <v-flex justify-space-between xs4>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn small fab @click="down" v-on="on">
            <v-icon large>mdi-minus</v-icon>
          </v-btn>
        </template>
        <span>Subtract a vertex</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn small fab @click="up" v-on="on">
            <v-icon large>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Add a vertex</span>
      </v-tooltip>
    </v-flex>
    <v-flex class="top" xs12 text-xs-center justify-center fluid fill-height justify-space-between>
      <div class="canvas" id="p5Canvas"></div>
    </v-flex>
  </v-layout>
</template>

<script>
if (process.browser) {
  var radar = require("@/Radar.js");
}
export default {
  data() {
    return {
      dialog: false
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
  }
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
