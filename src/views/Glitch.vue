<template>
  <core-section id="glitch">
    <v-layout justify-center align-center wrap> 
      <v-flex xs12 md7>
        <core-heading>Generative art</core-heading>
          <blockquote
            style="max-width: 450px;">
          <p class="single font-weight-light font-italic">
            I work with a computer to intentionally introduce randomness to naturally occuring algorithms, this occasionally leads to visually pleasing results.
          </p>
          <footer class="text-xs-center foot larger">
            Here is an instagram feed with some of those results ↓
          </footer>
        </blockquote>
      <v-hover
        v-slot:default="{ hover }">
      <v-card class="r">
        <v-container grid-list-sm fluid 
        @click="toInsta"
        :style="{ cursor: 'pointer'}">
            <v-img v-if="$isMobile()" :src="turtle2"></v-img>
            <v-img v-else class="glitch" :src="hover ? turtle2 : turtle"></v-img>
          </v-container>
        </v-card>
        </v-hover>
      </v-flex>
      
        <v-flex
        xs12
        md4
        class="text-xs-center ma-4">
          <h3 
          class="display-1 font-weight-medium my-4 primary--text">
            Processing
          </h3>
          <p class="larger" v-text="'I use a combination of p5.js and processing to bring algorithms to life on the web!  Here are some attempts to make my processing sketches interactive.'" /> 
          <p  class="larger font-weight-light font-italic">  Follow the link, press some buttons, and see what happens :) </p>
           <v-btn @mouseenter="hoverMe=true" @mouseleave="hoverMe=false" class="font-weight-light but" :color="hoverMe ? 'white--text primarydark' : 'black--text primarydark' "  @click="toProc">live processing sketches!!</v-btn>
        <v-img :src="hoverMe ? logo2 : logo1" > </v-img>  
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
           this.$router.push({ name: 'processing', params: {sketch: 0}})
      }
      
    },
    created(){
      let img1 = new Image();
      let img2 = new Image();
      img1.src = require('@/assets/turt_2.png');
      img2.src = require('@/assets/logoblack.png');
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
  
  .v-sheet {
    background-color: rgba(0,0,0,.28) !important;
}
 .touch{
    margin-top: 49%;
    margin-right:11%;
    color: #cecece;
     transform: rotate(36deg);
}
.but:hover{

  background-color: rgba(0,0,0,.28) !important;
}
.b{
  font-weight: bold;
}
.r{
  border-radius: 1%;
}
.single{
  font-size: 1.3em;
  font-family: 'Open Sans', sans-serif;
}
.larger{
  font-size: 1.3em;
}
</style>
