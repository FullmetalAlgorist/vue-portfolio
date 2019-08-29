<template>
  <v-layout class="sketches">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-icon class="refresh" @click="toSketch" :class="$isMobile() ? 'mobs' : ''" v-on="on">mdi-refresh</v-icon>
      </template>
      <span>REFRESH ME</span>
    </v-tooltip>
<!-- if mobile vh = 80 and color = white -->
    <v-flex align-self-center xs12>
      <v-flex v-if="s>0">
        <v-tooltip left>
          <template v-slot:activator="{ on }">
            <v-icon @click="s--" class="bigArrowLeft" :class="$isMobile() ? 'mobs' : ''" v-on="on">mdi-chevron-left</v-icon>
          </template>
          <span>Last sketch</span>
        </v-tooltip>
      </v-flex>

      <v-flex text-xs-center px-4 class="bb">
        <component v-if="refresh & refresh2" :is="sketchArray[s].component"></component>
      </v-flex>

      <v-flex v-if="s<sketchArray.length-1">
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-icon
              @click="s++"
              class="bigArrowRight"
              large
              v-on="on"
              :class="$isMobile() ? 'mobs' : ''"
            >mdi-chevron-right</v-icon>
          </template>
          <span>Next sketch</span>
        </v-tooltip>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import radarComponent from "@/components/sketches/Radar.vue";
import nextComponent from "@/components/sketches/Next";
import treeComponent from "@/components/sketches/Tree";
import penroseComponent from "@/components/sketches/Penrose";
import linesComponent from "@/components/sketches/Lines";
export default {
  props: ["sketch"],
  components: {
    radarComponent,
    nextComponent,
    treeComponent,
    penroseComponent,
    linesComponent
  },
  data() {
    return {
      s: this.sketch,
      sketchArray: [
        { title: "radar", component: radarComponent },
        { title: "next", component: nextComponent },
        { title: "tree", component: treeComponent },
        { title: "penrose", component: penroseComponent },
        { title: "lines", component: linesComponent }
      ]
    };
  },
  methods: {
    toSketch() {
      this.$router.push({ name: "processing", params: { sketch: 0 } });
      this.$router.push({ name: "processing", params: { sketch: this.s } });
    }
  },
  computed: {
    refresh() {
      return !this.$store.state.app.killPenrose;
    },
    refresh2() {
      return !this.$store.state.app.killLines;
    }
  },
  mounted() {
  }
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
  font-size: 850% !important;
  position: absolute;
  left: 70vw;
  top: 1vh;
   color: black;
}
.bigArrowLeft {
  font-size: 850% !important;
  position: absolute;
  left: 8vw;
  top: 1vh;
  color: black;
}
.ugh {
  padding: 0;
}
.refresh {
  font-size: 650% !important;
  position: absolute;
  left: 42vw;
  top: 1vh;
  padding-top:10px;
   color: black;
}
.sketch {
  z-index: 3;
}
.mobs{
  top: 78vh;  
  color: white;
}
</style>

