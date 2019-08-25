<template>
  <v-layout class="sketchMe elevation-24 pt-2" text-xs-center align-center justify-center wrap fill-height fluid>
    <info-panel :sketchMe="3" v-model="dialog"></info-panel>
    <v-flex justify-space-between xs4>
                  <v-tooltip top>
      <template v-slot:activator="{ on }">
         <!-- <v-btn  small color="black" >  -->
                <v-icon color="black" x-large @click="dialog = true" fab v-on="on" class="aboutME">mdi-information</v-icon>
            <!-- </v-btn> -->
      </template>
      <span>About this sketch</span>
    </v-tooltip>
    </v-flex>

    <v-flex pr-4 pl-4 justify-end xs8>
        <v-icon  x-large @click="shape=false" :class="shape ? 'elevation-0' : 'elevation-15'" :color="shape ? 'white' : 'black'" class="b1 pa-2 my-2 mx-3">mdi-details</v-icon> 
        <v-icon x-large @click="shape=true" :class="!shape ? 'elevation-0' : 'elevation-15'" :color="!shape ? 'white' : 'black'" class="b2 pa-2  my-2 mx-3">mdi-cards-diamond</v-icon> 
        <!-- delta -->
      <!-- <v-slider light color="black" v-model="fine" :max="600" :min="-600" always-dirty ></v-slider> -->
      <!-- <v-btn @click="hi">hi</v-btn> -->
    </v-flex>
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
             shape :  this.$store.getters['app/whatShape']
        }
    },
      components: {
      infoPanel: () => import('@/components/sketches/infoPanel'),
     },
      mounted() {
         
    const P5 = require('p5');
    new P5(penrose.main);
     //console.log(this.$store.state.app.triangle);
    //  if(){
    //    this.shape = true;
    //  }
    //  else{  
    //      this.shape = false;
    //  }
      },
       methods: {
    // flip() {
    //     if(this.shape)
    //   penrose.flip(value);
    // },
     },
     computed:{
        //  shape(){
        //      let me = 
        //     return me;
        //  }
     },
      watch:{
 shape(){
    
    //   
    //  })
    //   this.$store.state.app.restartPenrose
    console.log('shape: ', this.shape);
     if(this.shape == true){
        penrose.flip(10.0);
        //this.forceUpdate()
     }
     else{
          penrose.flip(6.0);
        //this.forceUpdate()
     }
     
       this.$store.commit('app/death');
      this.$nextTick().then(()  => {
        this.$store.commit('app/death');
    });
     }
     
    }
   
//   methods: {
//    stopPlease(){
      
//     }
//   },
//    computed:{
//     daeth(){
//          console.log('computing death');
//          console.log(this.$store.state.app.killSketches);
//       //console.log(this.$store.app.state.killSketches);
//       return this.$store.state.app.killSketches;
//     },
// }
}
</script>
<style lang="scss" scoped>
   
</style>