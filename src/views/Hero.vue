<template>
  <v-img
    class="circle"
    src="https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/frontPage/rippleMeLow.jpg"
    height="100vh"
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
  </v-img>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'

  export default {
    computed: {
      ...mapState('app', ['schema'])
    },
     components: {
      CoreDrawer: () => import('@/components/core/Drawer')
    },
    methods: {
        preloadImage(url){
      let img = new Image();
      img.src=url;
    }
    },
    created(){
     this.preloadImage('https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/frontPage/rippleMeLow.jpg');
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
</style>
