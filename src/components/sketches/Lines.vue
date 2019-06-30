<template>
  <v-layout 
  class="sketchMe elevation-24 pt-2" 
  text-xs-center 
  justify-center 
  wrap 
  fill-height 
  fluid>
    <v-flex justify-space-between xs4>
      <v-btn small color="black" fab>
        <v-icon medium class="aboutME">mdi-information</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs2></v-flex>
    <v-flex justify-space-between xs6>
      <v-btn large @click="colorMe">switch</v-btn>
      <v-btn small fab @click="white" color="black">
        <v-icon large>mdi-invert-colors</v-icon>
      </v-btn>
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

        }
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