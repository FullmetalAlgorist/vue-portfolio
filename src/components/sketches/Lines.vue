<template>
  <v-layout 
  class="sketchMe elevation-24 pt-2" 
 align-center
  justify-space-between
  wrap 
  fill-height 
  fluid
  :style="{marginTop: $isMobile() ? '0' : '60'}"
  >
  <info-panel :sketchMe="4" v-model="dialog"></info-panel>
    <v-flex  xs4>
                  <v-tooltip top>
      <template v-slot:activator="{ on }">
             <v-icon color="black" x-large @click="dialog = true" fab v-on="on" class="aboutME">mdi-information</v-icon>
      </template>
      <span>About this sketch</span>
    </v-tooltip>
    </v-flex>
    <!-- <v-flex xs2></v-flex> -->
    <v-flex xs4>
                   <v-tooltip top>
      <template v-slot:activator="{ on }">
          <v-btn style="font-size: 139%" outline color="black" large @click="colorMe" v-on="on">switch</v-btn>
      </template>
      <span>Random color!</span>
    </v-tooltip>
    </v-flex>
    
    <v-flex xs4>
                    <v-tooltip top>
      <template v-slot:activator="{ on }">
             <!-- <v-btn small fab > -->
        <v-icon x-large @click="white" color="black" v-on="on">mdi-invert-colors</v-icon>
      <!-- </v-btn> -->
      </template>
      <span>Reset</span>
    </v-tooltip>
  </v-flex>
    
    <v-layout 
    text-xs-center 
    justify-center 
    fluid 
    fill-height 
    justify-space-between>
      <v-flex v-if="!mobileSketch" class="tat" xs12>
        <div class="CANVAS" id="p5Canvas3"></div>
      </v-flex>
      <v-flex v-else xs12>
        <h1 class="er">Sorry, this sketch is not yet available on mobile devices! Try again from a desktop?</h1>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<script>
if (process.browser) {
  var lines = require('@/Lines.js');
  console.log('here');
}
export default {
    data(){
        return {
dialog: false,
mobileSketch: false
        }
    },
      components: {
      infoPanel: () => import('@/components/sketches/infoPanel'),
     },
     mounted() {
       if(this.$isMobile()){
         this.mobileSketch = true;
       }
       else{
          const P5 = require('p5');
    new P5(lines.main);
       }
   
    
     },
    methods: {
         colorMe(){
     lines.colorMe();
   },
   white(){
     lines.white();
    },
    kill(){
      console.log('kill');
       lines.stopPlease();
       this.$store.commit('app/death2');
      this.$nextTick().then(()  => {
        this.$store.commit('app/death2');
    });
    }
    }
}
</script>
<style lang="scss" scoped>
    .er{
      background-color: black;
      color: white;
      padding: 20px;
      font-family: 'Open Sans', sans-serif !important;
    }
</style>