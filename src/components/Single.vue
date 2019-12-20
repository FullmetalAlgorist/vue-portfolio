<template>
  <div>
    <!-- <v-carousel :cycle="false" hide-delimiters> -->
    <v-carousel :prev-icon="false" :next-icon="false" :cycle="false" hide-delimiters>
      <div>
        <div class="portfolio-box-caption" v-if="dialog">
          <v-icon color="white" @click="dialog = !dialog" fab class="infomer close">mdi-close</v-icon>
          <div class="inards text-xs-center align-center">{{sour.caption.text | firstLine }}</div>
        </div>
        <v-carousel-item v-if="sour.type== 'video'">
          <v-icon
            v-if="hov"
            color="white"
            @click="dialog = !dialog"
            fab
            class="infomer"
          >mdi-information</v-icon>

          <video :controls="hov ? true : false" controlslist="nodownload" disableRemotePlayback disablePictureInPicture loop>
            <source :src="sour.videos.standard_resolution.url" type="video/mp4" />
          </video>
        </v-carousel-item>
        <v-carousel-item v-else :src="sour.images.standard_resolution.url">
   <v-icon
            v-if="hov"
            color="white"
            @click="dialog = !dialog"
            fab
            class="infomer"
          >mdi-information</v-icon>

        </v-carousel-item>
      </div>
    </v-carousel>
  </div>
</template>
<script>
export default {
  filters: {
    firstLine: function(value) {
      return value.split("\n").shift();
    }
  },

  props: {
    hov: {
      type: Boolean
    },
    sour: {
      type: Object
    }
  },
  data() {
    return {
      dialog: false
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
video {
  height: 100% !important;
  width: 100% !important;
}
.infomer {
  position: absolute;
  z-index: 12;
  padding-top: 10px;
  padding-left: 10px;
}
.portfolio-box-caption {
  position: absolute;
  // bottom: 0;
  // display: block;
  height: 100% !important;
  width: 100% !important;
  //text-align: center;
  opacity: 1;
  z-index: 11;
  color: #fff;
  background: rgba(0, 0, 0, 0.543);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
  // max-height: calc(80vh - var(1rem)*2);
}
// .outerDiv{
//  height : 100% !important;
// width: 100% !important;
// }
.inards {
  text-align: center !important;
  padding-top: 150px;
  font-size: 2.5em;
  font-weight: 300;
  text-transform: uppercase;
}
</style>