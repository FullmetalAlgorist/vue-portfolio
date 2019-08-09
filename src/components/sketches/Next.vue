<template>
  <v-layout
    class="sketchMe elevation-24 pt-2"
    align-center
    justify-center
    wrap
    fill-height
  >
    <info-panel :sketchMe="1" v-model="dialog"></info-panel>
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
          <!-- <v-btn small fab > -->
          <v-icon x-large @click="uno" color="black" v-on="on">{{ icon1 }}</v-icon>
          <!-- </v-btn>  -->
        </template>
        <span>{{ tool1 }}</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <!-- <v-btn small fab >  -->
          <v-icon @click="dos" color="black" v-on="on" x-large>{{ icon2 }}</v-icon>
          <!-- </v-btn> -->
        </template>
        <span>{{ tool2 }}</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <!-- <v-btn small fab @click="tres" color="black" v-on="on"> -->
          <v-icon @click="tres" color="black" v-on="on" x-large>{{ icon3 }}</v-icon>
          <!-- </v-btn> -->
        </template>
        <span>{{ tool3 }}</span>
      </v-tooltip>
    </v-flex>
    <v-flex align-center text-xs-right xs4>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-switch light class="switchy" color="black" v-model="fast" v-on="on"></v-switch>
        </template>
        <span>Speed mode!</span>
      </v-tooltip>
    </v-flex>
    <!-- <v-layout text-xs-center justify-center fluid fill-height justify-space-between> -->
      <v-flex class="tat" xs12>
        <div id="p5Canvas2"></div>
      </v-flex>
    </v-layout>
  <!-- </v-layout> -->
</template>
<script>
if (process.browser) {
  var next = require("@/Next.js");
}
export default {
  data() {
    return {
      oneAgain: true,
      twoAgain: true,
      threeAgain: true,
      fast: false,
      dialog: false
    };
  },
  components: {
    infoPanel: () => import("@/components/sketches/infoPanel")
  },
  mounted() {
    const P5 = require("p5");
    new P5(next.main);
  },
  computed: {
    icon1() {
      return this.oneAgain ? "mdi-numeric-1-box" : "mdi-numeric-1-box-outline";
    },
    icon2() {
      return this.twoAgain ? "mdi-numeric-2-box" : "mdi-numeric-2-box-outline";
    },
    icon3() {
      return this.threeAgain
        ? "mdi-numeric-3-box"
        : "mdi-numeric-3-box-outline";
    },
    tool1() {
      return this.oneAgain ? "Hide" : "Show";
    },
    tool2() {
      return this.twoAgain ? "Hide" : "Show";
    },
    tool3() {
      return this.threeAgain ? "Hide" : "Show";
    }
  },
  methods: {
    uno() {
      this.oneAgain = next.uno();
    },
    dos() {
      this.twoAgain = next.dos();
    },
    tres() {
      this.threeAgain = next.tres();
    }
  },
  watch: {
    fast: function() {
      next.fast(this.fast);
    }
  }
};
</script>
<style lang="scss" scoped>
.switchy{
  margin-left:30%;
}
</style>
