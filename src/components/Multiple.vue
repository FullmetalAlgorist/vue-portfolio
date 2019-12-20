<template>
  <div>
    <v-carousel :cycle="false" hide-delimiters>
      <div v-for="item in grammy" :key="item.id">
        <div class="portfolio-box-caption" v-if="dialog">
          <v-icon color="white" @click="dialog = !dialog" fab class="infomer close">mdi-close</v-icon>
          <div class="inards text-xs-center align-center">{{cap | firstLine }}</div>
        </div>
        <v-carousel-item v-if="item.type== 'video'">
          <!-- <div @mouseenter="hoverMe3=true" @mouseleave="hoverMe3=false"> -->
          <v-icon
            v-if="hov"
            color="white"
            @click="dialog = !dialog"
            fab
            class="infomer"
          >mdi-information</v-icon>
          <video :controls="hov ? true : false" controlslist="nodownload" loop disableRemotePlayback disablePictureInPicture>
            <source :src="item.videos.standard_resolution.url" type="video/mp4" />
          </video>
          <!-- </div> -->
        </v-carousel-item>
        <v-carousel-item v-else :src="item.images.standard_resolution.url">
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
    sourceMe: {
      type: String
    },
    grammy: {
      type: Array
    },
    cap: {
      type: String
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
.v-carousel-item, video {
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
  width: 100%;
  height: 100%;
  //text-align: center;
  opacity: 1;
  z-index: 11;
  color: #fff;
   background: rgba(0, 0, 0, 0.543);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
  // min-height: calc(80vh - var(--spacing)*2);
  font-family: Karbon, Helvetica, sans-serif;
}
//  .portfolio-box-caption:hover {
//   opacity: 1;
//  }

.portfolio-box
  .portfolio-box-caption
  .portfolio-box-caption-content
  .project-name {
  padding: 0 15px;
  font-size: 1em;
}
.inards {
  text-align: center !important;
  padding-top: 150px;
  font-size: 2.5em;
  font-weight: 300;
  text-transform: uppercase;
}
</style>