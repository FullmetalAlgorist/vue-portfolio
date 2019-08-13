<template>
  <core-section id="portfolio">
    <abstract-3 />
      <v-flex xs12 sm6>
          <v-layout justify-space-between>
      <core-heading>Photography</core-heading>
      </v-layout>
      </v-flex>
    <v-flex xs12 sm6>
      <v-layout justify-space-between>
        <blockquote
          style="max-width: 450px;"
        >
          <p class="subheading font-weight-light font-italic">
            Tired of using stock photos on your website?  I would love to include my own photos as backgrounds and menu pages in the creation of your site!
          </p>
          <footer class="text-xs-center foot">
         Here is a sample of my work!<br>
         Click an image below to see more.
          </footer>
        </blockquote>
      </v-layout>
    </v-flex>
    
   <v-layout 
    @click="toPhotos"
    :style="{ cursor: 'pointer'}"
    >
    <v-flex xs12 sm12>
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
          <v-flex
               v-for="n in ninePhotos"
              :key="n.id"
              xs4
              d-flex>
              <v-card flat tile class="d-flex">
                <!-- :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" -->
                  <v-img
                    :src="n.srrc"
                    :lazy-src="lazyLoad"
                    aspect-ratio="1"
                    >
                      <template v-slot:placeholder>
                        <v-layout
                          fill-height
                          align-center
                          justify-center
                          ma-0>
                      <!-- <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular> -->
                        <circles-to-rhombuses-spinner
  :animation-duration="1200"
  :circles-num="3"
  :circle-size="15"
  color="#ffffff"
/>
                      </v-layout>
                    </template>
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
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
      lazyLoad: require('@/assets/download.jpeg'),
      ninePhotos: [
          // 5208,  7111, 9243
        {srrc: 'https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/gallery/untitled+folder/IMG_7619.JPG'},
        {srrc: 'https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/gallery/untitled+folder/IMG_5208.JPG'},
        {srrc: 'https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/gallery/IMG_6244.jpg'},
         {srrc: 'https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/gallery/untitled+folder/IMG_9176.JPG'},
        {srrc: 'https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/gallery/circ1.jpg'},
        {srrc: 'https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/gallery/untitled+folder/IMG_5705.JPG'},
        {srrc: 'https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/gallery/IMG_4370.jpg'},
        {srrc: 'https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/gallery/untitled+folder/IMG_9546.JPG'},
        {srrc: 'https://mariah-vue-portfolio.s3-us-west-2.amazonaws.com/gallery/wood-close.jpg'},

      //   {srrc: require('@/assets/gallery/IMG_6191.jpg')},
      //   {srrc: require('@/assets/gallery/IMG_4828.jpg')},
      //   {srrc: require('@/assets/gallery/IMG_6244.jpg')},
      //   {srrc: require('@/assets/gallery/circ1.jpg')},
      //   {srrc: require('@/assets/gallery/sea.jpg')},
      //  {srrc: require('@/assets/gallery/IMG_5992.jpg')},
      //   {srrc: require('@/assets/gallery/IMG_4370.jpg')},
      //   {srrc: require('@/assets/gallery/wood-close.jpg')},
      ]
    }),
    methods: {
      toPhotos(){
        this.$router.push('/photography');
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
    .v-sheet {
    background-color: rgba(0,0,0,.28) !important;
}
</style>
