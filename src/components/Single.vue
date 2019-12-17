<template>
        <div> 
            <!-- <v-icon
              v-if="hov"
            color="white"
          @click="dialog = !dialog"
            fab
           class="infomer"
          >mdi-information</v-icon>
             <div class="portfolio-box-caption" v-if="dialog"> A little diddy about my art :)</div> -->
            <video :controls="hov ? true : false" controlsList="nodownload" loop>
              <source :src="sourceMe" type="video/mp4" />
            </video>
                </div>
</template>
<script>
export default {
  props: {
      hov: {
        type: Boolean
      },
      sourceMe: String
    },
    data() {
        return{
             dialog: false,
        }
    },
  methods: {
  
  }
}
</script>
<style lang="scss" scoped>
video{
    
 height : 100% !important;
width: 100% !important;
}
.infomer{
  position: absolute;
  z-index: 12;
  padding-top: 10px;
  padding-left: 10px;
}
.portfolio-box-caption {
    position: absolute;
    // bottom: 0;
    // display: block;
  //  width: 100%;
  height: 100%;
    text-align: center;
     opacity: 0;
    z-index : 11;
    color: #fff;
    background: rgba(6, 56, 105, 0.9);
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
    min-height: calc(80vh - var(--spacing)*2);
}
</style>