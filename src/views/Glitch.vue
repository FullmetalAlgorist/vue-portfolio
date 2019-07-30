<template>
  <core-section id="glitch">
    <!-- <abstract-3 /> -->
    <v-layout wrap justify-space-between align-center> 
    <v-flex xs12 md7  >
    
          <!-- <v-layout > -->
      <core-heading>Generative art</core-heading>
     
        <blockquote
          style="max-width: 450px;">
          <p class="subheading font-weight-light font-italic">
      I work with a computer to intentionally introduce randomness to naturally occuring algorithms, this occasionally leads to visually pleasing results.
          </p>
          <footer class="text-xs-center foot">
         Here is an instagram feed with some of those results!
          </footer>
        </blockquote>
    <!-- </v-layout> -->
        <v-hover
        v-slot:default="{ hover }">
      <v-card>
        <v-container grid-list-sm fluid 
        @click="toInsta"
    :style="{ cursor: 'pointer'}">
            <v-img class="glitch" :src="hover ? turtle2 : turtle"></v-img>
          </v-container>
        </v-card>
        </v-hover>
      </v-flex>
      
        <v-flex
        xs12
        md4
        class="text-xs-center">
          <h3 
          class="display-1 font-weight-medium mb-4 primary--text">
            Processing
          </h3>
          <p class="subheading" v-text="'I use a combination of p5.js and processing to bring algorithms to life on the web!  Here are some attempts to make my processing sketches interactive.'" /> 
           <!-- <p class="subheading font-weight-light font-italic">I use a combination of p5.js and processing to bring algorithms to life on the web!  Here are some attempts to make my processing sketches interactive.  Press some buttons and see what happens :)</p> -->
          <p  class="pl-5 subheading font-weight-light font-italic">  Follow the link, press some buttons, and see what happens :) </p>
<v-btn @mouseenter="hoverMe=true" @mouseleave="hoverMe=false" class="font-weight-light" color="primarydark black--text" @click="toProc">live processing sketches!!</v-btn>
              <!-- <v-btn @click="$vuetify.goTo('#contact')" >Contact Me!</v-btn> -->
             <v-img :src="hoverMe ? logo2 : logo1"></v-img>
          
             <!-- <v-icon>mdi-touch_app</v-icon> -->
              </v-flex>
              </v-layout>
  </core-section>
</template>


<script>
import { FingerprintSpinner } from 'epic-spinners'
import { CirclesToRhombusesSpinner } from 'epic-spinners'
  export default {
    components: {
      Abstract3: () => import('@/components/Abstract3'),
      FingerprintSpinner,
      CirclesToRhombusesSpinner
    },
computed:{
      med(){
        return this.$vuetify.breakpoint.mdAndUp;
      }
    },
    data: () => ({
        turtle: require('@/assets/turtleC.jpg'),
        turtle2: require('@/assets/turt_2.png'),
        logo1: require('@/assets/logo1.png'),
        logo2: require('@/assets/logoblack.png'),
        hoverMe: false
    }),
    methods: {
      toInsta(){
        this.$router.push('/insta');
      },
      toProc(){
          this.$router.push('/processing');
      }
    }
  }
</script>

<style lang= "scss" scoped>
  .v-carousel__controls {
    background: transparent;
  }
  .heading{
    display: block;
  }
  .foot{
    padding-bottom: 20px;
  }
  .glitch{
      /* width: 90vw; */
  }
  .v-sheet {
    background-color: rgba(0,0,0,.28) !important;
}
 .touch{
    margin-top: 49%;
    margin-right:11%;
    color: #cecece;
    /* font-size: 50; */
    /* height: 150px; */
     transform: rotate(36deg);
}
/*
.outerTouch{
    align-content: center;

} */
</style>
