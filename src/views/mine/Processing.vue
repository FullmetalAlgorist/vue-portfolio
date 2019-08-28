<template>
      <v-layout class="sketches">
 <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon
                class="refresh"
                  @click="toSketch"
                  color="black"
                 v-on="on"
                >mdi-refresh</v-icon> 
              <!-- @click="$router.go({ name: 'processing', params: {s: s}})" -->
              <!-- @click="$router.push({ name: 'processing', params: {s: 3}})" -->
             <!-- @click="toProc"  -->
             </template>
              <span>REFRESH ME</span>
            </v-tooltip>

        <v-flex align-self-center xs12 >
          <v-flex v-if="s>0">
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <!-- @click="$store.commit('app/minusS')" -->
                <v-icon
                  @click="s--"
                  class="bigArrowLeft"
                  color="black"
                  v-on="on"
                >mdi-chevron-left</v-icon>
              </template>
              <span>Last sketch</span>
            </v-tooltip>
          </v-flex>
          
          <v-flex text-xs-center px-4  class="bb">
          <component v-if="refresh & refresh2" :is="sketchArray[s].component"></component>
      </v-flex>
      
          <v-flex v-if="s<sketchArray.length-1">
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
      </v-layout>
</template>

<script>
// nextComponent: () => import("@/components/sketches/Next"),
// treeComponent: () => import("@/components/sketches/Tree"),
// linesComponent: () => import("@/components/sketches/Lines")
import radarComponent from "@/components/sketches/Radar.vue";
import nextComponent from "@/components/sketches/Next";
import treeComponent from "@/components/sketches/Tree";
import penroseComponent from "@/components/sketches/Penrose";
import linesComponent from "@/components/sketches/Lines";
export default {
   props: ['sketch'],
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
        { title: "radar", component: radarComponent},
        { title: "next", component: nextComponent},
        { title: "tree", component: treeComponent },
        { title: "penrose", component: penroseComponent  },
        { title: "lines", component: linesComponent  }
      ]
    }
  },
methods: {
    // forceRerender(s) {
    //   console.log('here', s);
    //   this.sketchArray[s].componentKey += 1;  
    //    console.log('now', this.sketchArray[s].componentKey);
    // }
    toSketch(){
// console.log('toSketch');
// let newt = Number;
//  newt = this.sketch + es;
// console.log('newt: ', newt);

  this.$router.push({ name: 'processing', params: {sketch: 0}});
 this.$router.push({ name: 'processing', params: {sketch: this.s}});

// this.$router.refresh();
// this.$router.go();
console.log('sketch: ', this.sketch);
    }
  },
  computed: {
    refresh(){
      return !this.$store.state.app.killPenrose;
    },
    refresh2(){
      return !this.$store.state.app.killLines;
    },
    // sketch(){
    //   return 
    // }
    // sketch(){
    //    return this.$store.state.app.s;
    // }
  },
  // watch: {
  //   refresh(){
  //     console.log(!this.$store.state.app.killPenrose);
      
  //   }
  // }
  mounted(){
    // this.$store.commit('app/setState', this.s);
    // console.log('mounted sketch: ', this.sketch);
    // this.s = this.sketch;
  }
}
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
  font-size: 650% !important;
  position: absolute;
  left: 62vw;
  top: 1vh;
}
.bigArrowLeft {
  font-size: 650% !important;
  position: absolute;
  left: 32vw;
  top: 1vh;
}
.ugh{
  
  padding: 0;
}
.refresh{
   font-size: 650% !important;
  position: absolute;
  left: 47vw;
  top: 1vh;
}
.sketch{
  z-index: 3;
}
</style>

