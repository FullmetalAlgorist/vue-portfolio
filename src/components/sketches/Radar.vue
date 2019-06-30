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
        <v-flex justify-space-between xs4>
            <v-btn large @click="flip">flip</v-btn>
        </v-flex>   
        <v-flex  justify-space-between xs4>
            <v-btn small fab @click="down"> 
                <v-icon large>mdi-minus</v-icon>
            </v-btn>     
            <v-btn small fab @click="up">   
                <v-icon large>mdi-plus</v-icon>
            </v-btn>
        </v-flex>
        <v-flex class="top" 
                xs12
                text-xs-center 
                justify-center 
                fluid 
                fill-height 
                justify-space-between> 
            <div id="p5Canvas"></div>
        </v-flex>
   </v-layout>
</template>

<script>
if (process.browser) {
  var radar = require('@/Radar.js');
}
export default {
    data() {
        return {}
    },
    mounted() {
        const P5 = require('p5');
        new P5(radar.main);
      },
    methods: {
        flip(){radar.flip()},
        up(){radar.up()},
        down(){radar.down()}
    }
}
</script>