<template>
  <v-layout class="sketchMe elevation-24 pt-2" text-xs-center justify-center wrap fill-height fluid>
    <info-panel :sketchMe="2" v-model="dialog"></info-panel>
    <v-flex justify-space-between xs4>
                  <v-tooltip top>
      <template v-slot:activator="{ on }">
         <v-btn @click="dialog = true" small color="black" fab v-on="on"> 
                <v-icon medium class="aboutME">mdi-information</v-icon>
            </v-btn>
      </template>
      <span>About this sketch</span>
    </v-tooltip>
     <v-btn @click="stopPlease">STOP</v-btn>
    </v-flex>

    <!-- <v-flex pr-4 pl-4 justify-end xs8>
      <v-slider light color="black" v-model="fine" :max="600" :min="-600" always-dirty ></v-slider> -->
      <!-- <v-btn @click="hi">hi</v-btn> -->
    <!-- </v-flex> -->
    <v-layout text-xs-center justify-center fluid fill-height justify-space-between>
      <v-flex class="tat" xs12>
        <div id="p5Canvas6"></div>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
if (process.browser) {
  var penrose = require('@/Penrose.js');
}
export default {
    data(){
        return {
             dialog: false,
        }
    },
      components: {
      infoPanel: () => import('@/components/sketches/infoPanel'),
     },
      mounted() {
    const P5 = require('p5');
    new P5(penrose.main);
      },
       
  methods: {
   stopPlease(){
      penrose.stopPlease();
    }
  },
  
}
</script>
<style lang="scss" scoped>
    
</style>