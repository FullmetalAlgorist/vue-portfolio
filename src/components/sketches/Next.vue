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
        <v-flex justify-space-between xs6>
            <v-btn small fab @click="uno" color="black">
                    <v-icon large>{{ icon1 }}</v-icon>
            </v-btn>     
            <v-btn small fab @click="dos" color="black"> 
                <v-icon large>{{ icon2 }}</v-icon>
            </v-btn>
            <v-btn small fab @click="tres" color="black">
                <v-icon large>{{ icon3 }}</v-icon>
            </v-btn>
        </v-flex>
        <v-flex xs2>
            <v-switch 
                class="switch"
                color="white"
                v-model="fast">
            </v-switch>
        </v-flex>
        <v-layout 
        text-xs-center 
        justify-center 
        fluid 
        fill-height 
        justify-space-between> 
            <v-flex class="tat" xs12>
                <div id="p5Canvas2"></div>
            </v-flex>
        </v-layout>
    </v-layout>
</template>
<script>
if (process.browser) {
  var next = require('@/Next.js');
}
export default {
    data(){
        return {
            oneAgain: true,
     twoAgain: true,
     threeAgain: true,
     fast: false
        }
    },
      mounted() {
    const P5 = require('p5');
    new P5(next.main);
      },
       computed: {
    icon1(){
     return this.oneAgain ? 'mdi-numeric-1-box': 'mdi-numeric-1-box-outline';
    },
    icon2(){
     return this.twoAgain ? 'mdi-numeric-2-box': 'mdi-numeric-2-box-outline';
    },
    icon3(){
     return this.threeAgain ? 'mdi-numeric-3-box': 'mdi-numeric-3-box-outline';
    }
  },
methods: {

     uno(){
this.oneAgain = next.uno();
    },
    dos(){
this.twoAgain = next.dos();
    },
     tres(){
this.threeAgain  = next.tres();
    }
},
watch:{
  fast: function(){
      next.fast(this.fast);
  }
}
}
</script>
<style lang="scss" scoped>
.switch{
 position: relative;
 bottom: 7px;
}

</style>
