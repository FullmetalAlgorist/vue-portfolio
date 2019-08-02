<template>
<div>
  <div
    class="circle"
    :style="{ height: $isMobile() ? winHeight+'px' : '100vh'}"
  >
    <v-layout
      fill-height
      justify-start
     align-end
      text-xs-left
      :pa-5="$vuetify.breakpoint.mdAndUp"
      :pa-3="$vuetify.breakpoint.smAndDown"
     class="ppp" 
    >
      <div>
        <h1
          :class="`display-${$vuetify.breakpoint.mdAndUp ? '4' : '3'}`"
          class="display-4 name text-uppercase trial2--text"
          v-text="schema.basics.name"
        >
<!-- :class="`display-${$vuetify.breakpoint.mdAndUp ? '4' : '3'}`" -->
        </h1>
        <div
          :class="`display-${$vuetify.breakpoint.mdAndUp ? '3' : '1'}`"
          class="text-uppercase label"
          v-text="schema.basics.label"
        />
      </div>
    </v-layout>
  </div>
  </div>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'

  export default {
    data(){
      return{
        imag: '',

      }
    },
    computed: {
      ...mapState('app', ['schema']),
      winHeight(){
         //console.log('vh: ', vh);
        console.log('innerHeight: ',window.innerHeight);
        return (window.innerHeight * 0.01)*100
      } 
    },
     components: {
      CoreDrawer: () => import('@/components/core/Drawer')
    },
    methods: {
       
    },
    created(){
    //  let img = new Image;
    //  img = 'https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/frontPage/rippleMeLow.jpg';
    // this.imag = img;
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = 
// Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
//      
    }
</script>
<style lang="scss"scoped>
h1{
  font-weight:400;
  //opacity: .9;
  padding-right: 250px;
  font-size: 700% !important;
}
.name{
  /* color: black; */
    /* -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)); */
  /* filter: grayscale(100%); */
   /* color: primary !important; */
   line-height: 1 !important;
  }
  .label{
    /* filter: grayscale(100%); */
   
  }
  .circle{
    background-image: url('https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/frontPage/rippleMeLow.jpg');
//  height: 100vh;
  background-size: cover; 
  //height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  // height: calc(var(--vh, 1vh) * 100);
  }
 
</style>
