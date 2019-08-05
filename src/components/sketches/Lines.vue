<template>
  <v-layout 
  class="sketchMe elevation-24 pt-2" 
  text-xs-center 
  justify-center 
  wrap 
  fill-height 
  fluid>
  <info-panel :sketchMe="3" v-model="dialog"></info-panel>
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
    <!-- <v-flex xs2></v-flex> -->
    <v-flex justify-space-between xs6>
                   <v-tooltip top>
      <template v-slot:activator="{ on }">
          <v-btn large @click="colorMe" v-on="on">switch</v-btn>
      </template>
      <span>Random color!</span>
    </v-tooltip>
                    <v-tooltip top>
      <template v-slot:activator="{ on }">
             <v-btn small fab @click="white" color="black" v-on="on">
        <v-icon large>mdi-invert-colors</v-icon>
      </v-btn>
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
      <v-flex class="tat" xs12>
        <div class="CANVAS" id="p5Canvas3"></div>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<script>
if (process.browser) {
  var lines = require('@/Lines.js');
}
export default {
    data(){
        return {
dialog: false
        }
    },
      components: {
      infoPanel: () => import('@/components/sketches/infoPanel'),
     },
     mounted() {
    const P5 = require('p5');
    new P5(lines.main);
     },
    //  slideMe(){
    //   console.log(this.ex3.val);
    methods: {
         colorMe(){
     lines.colorMe();
   },
   white(){
     lines.white();
    }
    }
   
}
</script>
<style lang="scss" scoped>
    
</style>